import { verifyToken } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Vérifie si l'utilisateur est admin
function isAdmin(req: NextRequest): { id: string; role: string } | null {
  const token = req.cookies.get('token')?.value; // récupération du token dans le cookie
  const payload = token ? verifyToken(token) : null; // vérifie que le token ne soit pas null

  if (!payload || payload.role !== 'admin') return null;
  return payload; // retourne les donnée user associé au token
}

// Récupérer la liste des utilisateurs
export async function GET(req: NextRequest) {
  const auth = isAdmin(req);
  if (!auth) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });

  const users = await prisma.user.findMany({
    select: {
      user_id: true,
      email: true,
      role: true,
    },
  });

  return NextResponse.json(users);
}

// Modifier les données de l'utilisateur
export async function PATCH(req: NextRequest) {
  const auth = isAdmin(req);
  if (!auth) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });

  const body = await req.json();
  const user_id = parseInt(body.user_id);
   const role = body.role;
  if (!user_id || !role) {
    return NextResponse.json({ error: 'Champs manquants' }, { status: 400 });
  }

  try {
    const updated = await prisma.user.update({
      where: { user_id },
      data: { role },
    });

    return NextResponse.json({ message: 'Rôle mis à jour', user: updated });
  } catch (error) {
    return NextResponse.json({ error: 'Utilisateur introuvable ou erreur' }, { status: 500 });
  }
}

// Modifier les données de l'utilisateur
export async function DELETE(req: NextRequest) {
  const auth = isAdmin(req);
  if (!auth) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });

  const body = await req.json();
  const user_id = parseInt(body.user_id);

  if (!user_id) {
    return NextResponse.json({ error: 'ID requis' }, { status: 400 });
  }

  try {
    await prisma.user.delete({
      where: { user_id },
    });

    return NextResponse.json({ message: 'Utilisateur supprimé' });
  } catch (error) {
    return NextResponse.json({ error: 'Erreur lors de la suppression' }, { status: 500 });
  }
}