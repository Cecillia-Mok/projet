import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifyToken } from '@/lib/auth';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    // lis le cookie token créé à la connexion
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;
    if (!token) {
        return NextResponse.json({ error: 'Non authentifié' }, { status: 401 });
    }

    // vérifie la validité avec `verifyToken()`
    const payload = verifyToken(token);
    if (!payload) {
        return NextResponse.json({ error: 'Token invalide ou expiré' }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
        where: { user_id: payload.id },
        select: { user_id: true, email: true, role: true }
    });

    if (!user) {
        return NextResponse.json({ error: 'Utilisateur non trouvé' }, { status: 404 });
    }

    return NextResponse.json({ user });
}