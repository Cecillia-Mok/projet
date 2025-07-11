import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const response = NextResponse.json({ message: 'Déconnecté avec succès.' });

    response.cookies.set('token', '', {
      httpOnly: true,
      path: '/',
      expires: new Date(0), // Expire immédiatement
    });

    return response;
  } catch (error) {
    console.error('Erreur lors de la déconnexion :', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
