'use client'
import Link from 'next/link'
import { useState } from 'react';
import Form from '../../components/form';

export default function Connexion() {
  const [error, setError] = useState('');

  // Récupération de la fonction login depuis le store Zustand
  // const login = useUserStore((state) => state.login);

  // const handleLogin = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setError('');

  //   try {
  //     const response = await fetch('http://localhost:3000/auth/login', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       credentials: 'include',
  //       body: JSON.stringify({ email, password }),
  //     });

  //     if (!response.ok) {
  //       throw new Error('Email ou mot de passe incorrect');
  //     }

  //     const data = await response.json();
  //     console.log("Réponse API:", data);

  //     // Extraire le token depuis data.data.accessToken
  //     const token = data.data?.accessToken;
  //     if (!token || typeof token !== 'string') {
  //       throw new Error('Token invalide reçu depuis l’API');
  //     }

  //     localStorage.setItem('token', token);
  //     login(token);

  //   } catch (err: any) {
  //     setError(err.message);
  //   }
  // };

  return (
    <main className="flex-1 place-content-center text-center">
      <div className="relative p-6 bg-radial from-[#F7EAD9] from-50% to-[#F4D7B7] to-120% shadow-[0_0_20px_rgba(185,104,31,0.3)] rounded-lg md:max-w-[400px] md:mx-auto">
        <h2 className="text-2xl mb-4 text-center">Connexion</h2>
        {error && <p className="text-[#C20615] text-center mb-4">{error}</p>}
        <Form></Form>
        <div className="flex justify-end mt-5 gap-2">
          <p>Pas de compte ?</p>
          <Link href="/inscription">
            <button className="cursor-pointer"> S'inscrire »</button>
          </Link>
        </div>
      </div >
    </main>
  )
}
