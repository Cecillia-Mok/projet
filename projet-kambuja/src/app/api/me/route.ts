import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    // lis le cookie token créé à la connexion
    const token = req.cookies.get('token')?.value;
    if (!token) {
      return NextResponse.json({ error: 'Non authentifié' }, { status: 401 });
    }

    // vérifie la validité avec `verifyToken()`
    const payload = verifyToken(token);
    if (!payload) {
      return NextResponse.json({ error: 'Token invalide ou expiré' }, { status: 401 });
    }

    // récupère l'id, l'email et le role de l'utilisateur connecté
    const user = await prisma.user.findUnique({
      where: { user_id: Number(payload.id) },
      select: { user_id: true, email: true, role: true },
    });

    if (!user) {
      return NextResponse.json({ error: 'Utilisateur non trouvé' }, { status: 404 });
    }

    return NextResponse.json({ user });
  } catch (error) {
    console.error('Erreur serveur dans GET user:', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}