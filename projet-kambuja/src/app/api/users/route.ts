import { verifyToken } from "@/lib/auth";
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

// Vérifie si l'utilisateur est admin
function isAdmin(req: NextRequest): { id: string; role: string } | null {
  const token = req.cookies.get('token')?.value; // récupération du token dans le cookie
  const payload = token ? verifyToken(token) : null; // vérifie que le token ne soit pas null

  if (!payload || payload.role !== 'admin') return null;
  return payload; // retourne les donnée user associé au token
}

const userSafeSelect = {
  user_id: true,
  email: true,
  pseudo: true,
  role: true,
  creation_date: true,
};

// Récupérer la liste des utilisateurs
export async function GET(req: NextRequest) {
  const auth = isAdmin(req);
  if (!auth) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  const { searchParams } = new URL(req.url);
  const userIdParam = searchParams.get("id");

  if (userIdParam) {
    const user_id = parseInt(userIdParam);
    const user = await prisma.user.findUnique({
      where: { user_id },
      select: userSafeSelect,
    });

    if (!user) {
      return NextResponse.json({ error: 'Utilisateur non trouvé' }, { status: 404 });
    }

    return NextResponse.json({ user });
  }

  const users = await prisma.user.findMany({
    select: userSafeSelect,
  });

  return NextResponse.json({ users });
}

// Modifier les données de l'utilisateur
export async function PATCH(req: NextRequest) {
  const auth = isAdmin(req);
  if (!auth) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });

  const body = await req.json();
  const user_id = parseInt(body.user_id);
  const { role, pseudo } = body;

  if (!user_id || (!role && !pseudo)) {
    return NextResponse.json({ error: 'Champs manquants' }, { status: 400 });
  }

  try {
    const updated = await prisma.user.update({
      where: { user_id },
      data: {
        ...(role && { role }),
        ...(pseudo && { pseudo }),
      },
      select: userSafeSelect,
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