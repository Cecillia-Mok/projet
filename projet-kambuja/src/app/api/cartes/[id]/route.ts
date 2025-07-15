import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const cardId = parseInt(params.id)

  if (isNaN(cardId)) {
    return NextResponse.json({ error: 'ID invalide' }, { status: 400 })
  }

  try {
    const carte = await prisma.card.findUnique({
      where: { card_id: cardId },
      include: {
        choice: {
          include: {
            next_card: true,
          },
        },
      },
    })

    if (!carte) {
      return NextResponse.json({ error: 'Carte introuvable' }, { status: 404 })
    }

    return NextResponse.json(carte)
  } catch (error) {
    console.error('Erreur récupération carte', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
