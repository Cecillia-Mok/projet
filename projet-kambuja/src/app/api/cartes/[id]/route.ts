import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
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

    return NextResponse.json(carte);
  } catch (error) {
    console.error('Erreur récupération carte :', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
