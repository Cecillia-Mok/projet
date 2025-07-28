import { verifyToken } from "@/lib/auth";
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

// Vérifie si l'utilisateur est admin
function isAdmin(req: NextRequest): { id: string; role: string } | null {
  const token = req.cookies.get('token')?.value; // récupération du token dans le cookie
  const payload = token ? verifyToken(token) : null; // vérifie que le token ne soit pas null

  if (!payload || payload.role !== 'admin') return null;
  return payload; // retourne les donnée user associé au token
}

// Récupère les données d'une carte pour le formulaire de modification
export async function GET(req: NextRequest) {
  const auth = isAdmin(req);
  if (!auth) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });

  const url = req.nextUrl;
  const pathname = url.pathname; // ex: /api/cartes/42
  const idStr = pathname.split('/').pop(); // récupère "42"
  const cardId = Number(idStr);

  if (!Number.isInteger(cardId)) {
    return NextResponse.json({ error: 'ID invalide' }, { status: 400 });
  }

  try {
    const carte = await prisma.card.findUnique({
      where: { card_id: cardId },
      include: {
        choices: {
          include: {
            next_card: true,
          },
        },
      },
    });

    if (!carte) {
      return NextResponse.json({ error: 'Carte introuvable' }, { status: 404 });
    }

    return NextResponse.json({ card: carte });
  } catch (error) {
    console.error('Erreur récupération carte :', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

// Modification des données d'une carte
export async function PATCH(req: NextRequest, context: any) {
  const auth = isAdmin(req);
  if (!auth) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });

  const cardIdParam = context.params.id;
  const card_id = parseInt(cardIdParam);

  if (isNaN(card_id)) {
    return NextResponse.json({ error: 'Paramètre "id" invalide' }, { status: 400 });
  }

  try {
    const existingCard = await prisma.card.findUnique({
      where: { card_id },
    });

    if (!existingCard) {
      return NextResponse.json({ error: 'Carte non trouvée' }, { status: 404 });
    }

    const body = await req.json();
    const { title, text, status } = body;

    const updated = await prisma.card.update({
      where: { card_id },
      data: {
        ...(title !== undefined && { title }),
        ...(text !== undefined && { text }),
        ...(status !== undefined && { status }),
      },
      select: {
        card_id: true,
        title: true,
        text: true,
        status: true,
      }
    });

    return NextResponse.json({ message: 'Carte mise à jour', card: updated });
  } catch (error) {
    console.error('Erreur lors de la mise à jour de la carte:', error);
    return NextResponse.json({ error: 'Erreur serveur lors de la mise à jour' }, { status: 500 });
  }
}
