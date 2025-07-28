'use client'

import Loader from "@/components/loader";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/authContext';

interface Game {
  game_id: number;
  status: string;
  game_start_date: string;
  game_end_date: string | null;
}

interface ProfileData {
  user_id: number;
  email: string;
  pseudo: string;
  games: Game[];
}

export default function Joueur() {
  const { user, loading } = useAuth();
  const router = useRouter();

  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [fetching, setFetching] = useState(true);

  // Redirection vers la page de connexion si non connecté
  useEffect(() => {
    if (!loading && !user) {
      router.push('/connexion');
    }
  }, [loading, user, router]);

  // Récupération des données du profil
  useEffect(() => {
    if (!user) return;

    const fetchProfile = async () => {
      try {
        const res = await fetch('/api/profil', { credentials: 'include' });
        const data = await res.json();
        if (!res.ok) {
          console.error(data.error || 'Erreur chargement profil');
          return;
        }
        setProfile(data);
        setFetching(false);
      } catch (error) {
        console.error('Erreur réseau');
        setFetching(false);
      }
    };

    fetchProfile();
  }, [user]);

  if (loading || fetching || !profile) return <Loader />;

  const finishedGames = profile.games.filter(game => game.status === 'terminée');
  const ongoingGames = profile.games.filter(game => game.status !== 'terminée');

  return (
    <section className="flex-1 text-center">
      <h2 className="text-4xl mb-10">Bibliothèque</h2>
      <div className="flex gap-5 text-left justify-center">
        <img src="/rumduol.svg" alt="user icon" className="bg-[#553920] p-2 rounded-xl" />
        <div>
          <h2><strong>{profile.pseudo}</strong></h2>
          <p>{profile.email}</p>
        </div>
      </div>

      <div className="flex flex-col gap-10 mt-10">
        <div>
          <h2>Accomplissements</h2>
          <p>Parties jouées : <strong>{profile.games.length}</strong></p>
          <p>Parties terminées : <strong>{finishedGames.length}</strong></p>
          <p>Parties en cours : <strong>{ongoingGames.length}</strong></p>
        </div>

        <div>
          <h3 className="text-lg font-bold">Reprendre une partie</h3>
          {ongoingGames.length > 0 ? (
            <ul className="max-h-[30vh] w-fit pr-5 mx-auto overflow-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-50 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-[#553920] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#DA933C]">
              {ongoingGames.map(game => (
                <li key={game.game_id}>
                  Partie du {new Date(game.game_start_date).toLocaleDateString()}
                  <button
                    className="ml-3 text-green-700 underline"
                    onClick={() => router.push(`/game/${game.game_id}`)}
                  >
                    Reprendre la partie
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>Aucune partie en cours</p>
          )}
        </div>
      </div>
    </section>
  )
}