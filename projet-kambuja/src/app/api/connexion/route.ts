import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { generateToken } from '@/lib/auth';
import { z } from 'zod';

const prisma = new PrismaClient();

// Schema pour l'inscription et la connexion
const zodSchema = z.object({
    email: z.string()
        .email()
        .trim(),
    password: z.string()
        .min(8)
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
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            return NextResponse.json({ error: "Email ou mot de passe incorrect." }, { status: 401 });
        }

        // Vérifie si le mdp est correct
        const passwordIsValid = await bcrypt.compare(password, user.password);
        if (!passwordIsValid) {
            return NextResponse.json({ error: "Email ou mot de passe incorrect." }, { status: 401 });
        }


        // Génération du token
        const token = generateToken({ id: String(user.user_id), role: user.role });

        // Création de la réponse avec cookie
        const response = NextResponse.json({
            user: {
                id: user.user_id,
                email: user.email,
                role: user.role
            }
        });

        response.cookies.set('token', token, {
            httpOnly: true,
            path: '/',
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
        });

        return response;

    } catch (err) {
        console.error("Erreur dans /api/connexion:", err);
        return NextResponse.json({ error: "Erreur interne du serveur." }, { status: 500 });
    }
}
