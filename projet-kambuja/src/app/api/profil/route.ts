import { verifyToken } from "@/lib/auth";
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

// Vérifie le profil du user
function getAuthUser(req: NextRequest): { id: string; role: string } | null {
    const token = req.cookies.get('token')?.value; // récupération du token dans le cookie
    const payload = token ? verifyToken(token) : null; // vérifie que le token ne soit pas null
    if (!payload || typeof payload !== 'object') return null;

    return payload; // retourne les donnée user associé au token
}

// Récupérer un utilisateur
export async function GET(
    req: NextRequest,
    context: any
) {
    const auth = getAuthUser(req)
    if (!auth) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });

    const user_id = parseInt(auth.id);

    try {
        const user = await prisma.user.findUnique({
            where: { user_id },
            select: {
                user_id: true,
                email: true,
                pseudo: true,
            },
        });

        if (!user) {
            return NextResponse.json({ error: "Utilisateur introuvable" }, { status: 404 });
        }

        const games = await prisma.game.findMany({
            where: { user_id },
            select: {
                game_id: true,
                status: true,
                game_start_date: true,
                game_end_date: true,
            },
        })

        return NextResponse.json({
            user_id: user.user_id,
            email: user.email,
            pseudo: user.pseudo,
            games, // tableau de parties
        });
        
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
    }
}