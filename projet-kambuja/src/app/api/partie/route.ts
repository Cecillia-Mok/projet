import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Créer une partie en récupérant l'id du user 
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { user_id } = body;

        if (!user_id) {
            return NextResponse.json({ error: "user_id manquant" }, { status: 400 });
        }

        const game = await prisma.game.create({
            data: {
                user_id: parseInt(user_id),
                game_start_date: new Date(), // maintenant
                // status est par défaut à "en cours"
            },
        });

        return NextResponse.json({ message: "Partie créée", game }, { status: 201 });

    } catch (err) {
        console.error("Erreur au lancement de la partie", err);
        return NextResponse.json({ error: "Erreur interne du serveur." }, { status: 500 });
    };
}

// Récupérer les parties qui ont le statut en cours || qui n'ont pas de date de fin
// Reprendre à la carte qui était affichée en dernière