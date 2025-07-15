import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const cartes = await prisma.card.findMany({
      include: {
        choice: {
          include: {
            next_card: true, // récupère la carte suivante
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
