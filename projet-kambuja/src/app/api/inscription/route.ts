import { z } from 'zod';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Schema pour l'inscription et la connexion
const zodSchema = z.object({
    email: z.string()
        .email({ message: "Email invalide." })
        .trim(),
    password: z.string()
        .min(8, { message: "Le mot de passe requiert un minimum de 8 caractères." })
        .trim(),
});

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // Validation Zod
        const parsed = zodSchema.safeParse(body);

        if (!parsed.success) {
            const zodErrors = parsed.error.errors.reduce((acc, err) => {
                const key = err.path[0]; // 'email' ou 'password'
                acc[key] = err.message;
                return acc;
            }, {} as Record<string, string>);

            return NextResponse.json({ errors: zodErrors }, { status: 400 });
        }

        const { email, password } = parsed.data;

        // Vérifie si l'utilisateur existe déjà
        const existing = await prisma.user.findUnique({ where: { email } });
        if (existing) {
            return NextResponse.json({ error: "Ce compte existe déjà." }, { status: 409 });
        }

        // Création du nouvel utilisateur
        const hashed = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: { email, password: hashed }
        });

    } catch (err) {
        console.error("Erreur dans /api/inscription:", err);
        return NextResponse.json({ error: "Erreur interne du serveur." }, { status: 500 });
    }
}
