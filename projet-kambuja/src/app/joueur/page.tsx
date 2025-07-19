'use client'
import Loader from "@/components/loader";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/authContext';

export default function Joueur() {
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
    <section className="flex-1 text-center">
      <div className="flex flex-col gap-10 mt-10">
        <div>
          <h1 className="text-4xl">Bibliothèque</h1>
          <p>La page où le joueur peut consulter son profil et ses parties passées.</p>
        </div>
        <div>
          <h2>Accomplissements</h2>
          <p>Nombre de parties jouées</p>
          <p>Nombre de fin débloquées</p>
        </div>
        <div>
          <h2>Archives</h2>
          <ul>
            <li>Partie 1 <button>Consulter la partie</button></li>
            <li>Partie 2 <button>Consulter la partie</button></li>
            <li>Partie 3 <button>Consulter la partie</button></li>
          </ul>
        </div>
        <div>
          <h2>Reprendre une partie</h2>
          <ul>
            <li>Partie 4 <button>Reprendre la partie</button></li>
            <li>Partie 5 <button>Reprendre la partie</button></li>
            <li>Partie 6 <button>Reprendre la partie</button></li>
          </ul>
        </div>
      </div>
    </section>
  )
}