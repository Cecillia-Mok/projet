// app/api/partie/[game_id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { verifyToken } from '@/lib/auth';

const prisma = new PrismaClient();

function getAuthUser(req: NextRequest): { id: string; role: string } | null {
  const token = req.cookies.get('token')?.value; // récupération du token dans le cookie
  const payload = token ? verifyToken(token) : null; // vérifie que le token ne soit pas null
  if (!payload || typeof payload !== 'object') return null;

  return payload; // retourne les donnée user associé au token
}

// récupérer une partie en particulier
export async function GET(
  req: NextRequest,
  context: any
) {
  const auth = getAuthUser(req);
  if (!auth) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const user_id = parseInt(auth.id);
  const game_id = parseInt(context.params.game_id);

  try {
    const game = await prisma.game.findUnique({
      where: { game_id },
      include: {
        gameChoices: {
          include: {
            choice: {
              select: {
                choice_id: true,
                text: true,
                consequence: true,
              },
            },
            card: {
              select: {
                card_id: true,
                title: true,
                text: true,
              },
            },
          },
        },
        gameCards: {
          include: {
            card: {
              select: {
                card_id: true,
                title: true,
                status: true,
              },
            },
          },
        },
      },
    });

    if (!game) {
      return NextResponse.json({ error: "Partie non trouvée" }, { status: 404 });
    }

    if (game.user_id !== user_id) {
      return NextResponse.json({ error: "Accès interdit" }, { status: 403 });
    }

    // Organiser la réponse
    const response = {
      game_id: game.game_id,
      status: game.status,
      start_date: game.game_start_date,
      end_date: game.game_end_date,
      cards_played: game.gameCards.map(gc => gc.card),
      choices_made: game.gameChoices.map(gc => ({
        card: gc.card,
        choice: gc.choice
      })),
    };

    return NextResponse.json(response);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

export async function PATCH(
  req: NextRequest,
  context: any
) {
  const auth = getAuthUser(req);
  if (!auth) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });

  const user_id = parseInt(auth.id);
  const game_id = parseInt(context.params.game_id);

  try {
    const body = await req.json();
    const { card_id, choice_id } = body;

    // Vérifie que la partie appartient au joueur
    const game = await prisma.game.findUnique({ where: { game_id } });
    if (!game || game.user_id !== user_id) {
      return NextResponse.json({ error: 'Accès interdit ou partie introuvable' }, { status: 403 });
    }

    // Enregistre la carte dans gameCards (si pas déjà présente)
    await prisma.gameCard.upsert({
      where: {
        game_id_card_id: {
          game_id,
          card_id,
        },
      },
      update: {},
      create: {
        game_id,
        card_id,
      },
    });

    // Si un choix est sélectionné
    if (choice_id) {
      const choice = await prisma.choice.findUnique({
        where: { choice_id },
        include: {
          card: true,
          next_card: true,
        },
      });

      if (!choice || choice.card.card_id !== card_id) {
        return NextResponse.json({ error: 'Choix invalide pour cette carte' }, { status: 400 });
      }

      // Vérifie si le choix a déjà été enregistré
      const existingChoice = await prisma.gameChoice.findUnique({
        where: {
          game_id_card_id_choice_id: {
            game_id,
            card_id,
            choice_id,
          },
        },
      });

      if (existingChoice) {
        return NextResponse.json({ error: 'Ce choix a déjà été enregistré.' }, { status: 400 });
      }

      // Enregistre le choix
      await prisma.gameChoice.create({
        data: {
          game_id,
          card_id,
          choice_id,
        },
      });

      // Enregistre la next_card si elle existe
      if (choice.next_card) {
        await prisma.gameCard.upsert({
          where: {
            game_id_card_id: {
              game_id,
              card_id: choice.next_card.card_id,
            },
          },
          update: {},
          create: {
            game_id,
            card_id: choice.next_card.card_id,
          },
        });

        // Si la next_card est une fin de partie
        if (choice.next_card.status === 'fin de partie') {
          await prisma.game.update({
            where: { game_id },
            data: {
              status: 'terminée',
              game_end_date: new Date(),
            },
          });
        }
      }
    } else {
      // Si la carte actuelle n'a pas de choix, vérifier si elle est une fin de partie
      const card = await prisma.card.findUnique({ where: { card_id } });
      if (card?.status === 'fin de partie') {
        await prisma.game.update({
          where: { game_id },
          data: {
            status: 'terminée',
            game_end_date: new Date(),
          },
        });
      }
    }

    return NextResponse.json({ message: 'Carte et choix enregistrés' });
  } catch (err) {
    console.error('Erreur PATCH /partie/[game_id]', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}


export async function DELETE(
  req: NextRequest,
  context: any
) {
  const auth = getAuthUser(req);
  if (!auth) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });

  const game_id = parseInt(context.params.game_id);
  const user_id = parseInt(auth.id);

  try {
    const game = await prisma.game.findUnique({ where: { game_id } });

    if (!game) return NextResponse.json({ error: 'Partie introuvable' }, { status: 404 });
    if (game.user_id !== user_id) {
      return NextResponse.json({ error: "Accès interdit" }, { status: 403 });
    }

    await prisma.game.delete({ where: { game_id } });

    return NextResponse.json({ message: 'Partie supprimée' });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
