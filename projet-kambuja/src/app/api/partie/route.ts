import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { verifyToken } from '@/lib/auth';

const prisma = new PrismaClient();

function getAuthUser(req: NextRequest): { id: string; role: string } | null {
  const token = req.cookies.get('token')?.value; // récupération du token dans le cookie
  const payload = token ? verifyToken(token) : null; // vérifie que le token ne soit pas null

  return payload; // retourne les donnée user associé au token
}

// Créer une partie en récupérant l'id du user 
export async function POST(req: NextRequest) {
  // vérifie que le user est connecté
  const auth = getAuthUser(req);
  if (!auth) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    if (!parseInt(auth.id)) {
      return NextResponse.json({ error: "user_id manquant" }, { status: 400 });
    }

    // Créer la partie
    const game = await prisma.game.create({
      data: {
        user_id: parseInt(auth.id),
        game_start_date: new Date(),
      },
    });

    // Récupérer la carte de départ
    const startingCard = await prisma.card.findFirst({
      where: { title: "Messagers du Nord" },
    });

    if (!startingCard) {
      return NextResponse.json({ error: "Aucune carte de départ trouvée" }, { status: 500 });
    }

    await prisma.gameCard.create({
      data: {
        game_id: game.game_id,
        card_id: startingCard.card_id,
      },
    });

    return NextResponse.json({ message: "Partie créée", game, startingCard }, { status: 201 });

  } catch (err) {
    console.error("Erreur au lancement de la partie", err);
    return NextResponse.json({ error: "Erreur interne du serveur." }, { status: 500 });
  };
}

// Récupérer la liste des parties d'un user
export async function GET(req: NextRequest) {
  const auth = getAuthUser(req);
  if (!auth) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const games = await prisma.game.findMany({
      where: { user_id: parseInt(auth.id) },
      include: {
        gameCards: {
          include: { card: true },
        },
      },
      orderBy: { game_start_date: 'desc' },
    });

    return NextResponse.json({ games }, { status: 200 });
  } catch (err) {
    console.error("Erreur à la récupération des parties", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
