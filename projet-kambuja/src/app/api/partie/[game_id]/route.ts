// app/api/partie/[game_id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { verifyToken } from '@/lib/auth';

const prisma = new PrismaClient();

function getAuthUser(req: NextRequest): { id: string; role: string } | null {
    const token = req.cookies.get('token')?.value; // récupération du token dans le cookie
    const payload = token ? verifyToken(token) : null; // vérifie que le token ne soit pas null

    return payload; // retourne les donnée user associé au token
}

// récupérer une partie en particulier
export async function GET(req: NextRequest, { params }: { params: { game_id: string } }) {
    const auth = getAuthUser(req);
    if (!auth) {
        return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }

    const game_id = parseInt(params.game_id);

    try {
        const game = await prisma.game.findUnique({
            where: { game_id },
            include: {
                GameCard: {
                    include: { card: true },
                },
            },
        });

        if (!game) {
            return NextResponse.json({ error: "Partie non trouvée" }, { status: 404 });
        }

        return NextResponse.json({ game });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest, { params }: { params: { game_id: string } }) {
    const auth = getAuthUser(req);
    if (!auth) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });

    const game_id = parseInt(params.game_id);
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
