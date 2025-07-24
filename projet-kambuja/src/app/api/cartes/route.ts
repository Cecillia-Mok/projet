import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from '@/lib/auth';

const prisma = new PrismaClient();

function isAdmin(req: NextRequest): { id: string; role: string } | null {
  const token = req.cookies.get('token')?.value; // récupération du token dans le cookie
  const payload = token ? verifyToken(token) : null; // vérifie que le token ne soit pas null

  if (!payload || payload.role !== 'admin') return null;
  return payload; // retourne les donnée user associé au token
}

export async function GET(req: NextRequest) {
  const auth = isAdmin(req);
  if (!auth) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  try {
    const cartes = await prisma.card.findMany({
      include: {
        choices: {
          include: {
            next_card: true,
          },
        },
      },
    });

    return NextResponse.json(cartes);
  } catch (error) {
    console.error("Erreur lors de la récupération des cartes :", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
