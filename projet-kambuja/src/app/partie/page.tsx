'use client'
import Card from "@/components/card";
import Loader from "@/components/loader";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/authContext';

export default function Partie() {
  const { user, loading } = useAuth();
  const router = useRouter();

  // Redirection si non connecté
  useEffect(() => {
    if (!loading && !user) {
      router.push('/connexion'); // Redirige vers la page de connexion
    }
  }, [loading, user, router]);

  if (loading || !user) return <Loader />;

  return (
    <main className="flex-1 text-center">
      <div>
        <h1 className="text-4xl m-10">Page Partie</h1>
        <p>La page où les cartes apparaîtront de manière dynamique !</p>
        <button>Commencer une partie</button>
      </div>
    </main>
  );
}
