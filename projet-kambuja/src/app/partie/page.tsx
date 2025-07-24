'use client'
import Carte from "@/components/carte"
import Loader from "@/components/loader"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/authContext'

export default function Partie() {
  const router = useRouter()
  const { user, loading } = useAuth()

  const [gameId, setGameId] = useState<number | null>(null)
  const [gameStarted, setGameStarted] = useState(false)
  const [firstCardId, setFirstCardId] = useState();
  const [lastCardId, setLastCardId] = useState();
  // const [canResume, setCanResume] = useState(false)

  // Redirige si l’utilisateur n’est pas connecté
  useEffect(() => {
    if (!loading && !user) {
      router.push('/connexion')
    }
  }, [loading, user, router])

  const startGame = async () => {
    try {
      // Création de la partie
      const res = await fetch('/api/partie', {
        method: 'POST',
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erreur");

      // Mise à jour gameId avec le nouvel id
      const newGameId = data.game.game_id;
      setGameId(newGameId);

      // Récupération du gameId dans l'url  
      const response = await fetch(`/api/partie/${newGameId}`, {
        method: 'GET',
      })

      const dataGame = await response.json();
      if (!response.ok) throw new Error(dataGame.error || "Erreur");

      setFirstCardId(dataGame.cards_played[0].card_id);
      setGameStarted(true);

    } catch (err) {
      console.error("Erreur lors de la création de la partie :", err);
    }
  };

  if (loading || !user) return <Loader />

  return (
    <section className="flex-1 text-center">
      {!gameStarted ? (
        <div>
          <h1 className="text-3xl mb-10 md:text-4xl">Prêt à débuter votre règne ?</h1>
          <p className="text-lg mb-10 mx-auto md:w-[75%]">D’après la légende, notre royaume naquit, au premier siècle de notre ère, de l’union de Soma, princesse des Nāgas, et de Kaundinya, plus tard nommé Kambu, brahmane provenu d’Inde. En guise de cadeau aux futurs époux, le roi des Nāgas, père de la mariée, bu l’eau qui recouvrait la région pour leur offrir une nouvelle terre. C’est ainsi que le nouveau royaume fut appelé Kambuja, qui signifie « ceux qui sont nés de Kambu ». Que vos choix mènent notre peuple khmer vers la prospérité…</p>

          <button
            onClick={startGame}
            className="mt-2.5 text-white bg-[#DA933C] transition duration-300 ease-in-out hover:bg-[#C4802D] px-4 py-2 font-semibold rounded-lg cursor-pointer"
          >
            Commencer
          </button>

          {/* {canResume &&
            <button
              onClick={resumeGame}
              className="mt-2.5 text-white bg-[#DA933C] transition duration-300 ease-in-out hover:bg-[#C4802D] px-4 py-2 font-semibold rounded-lg cursor-pointer"
            >
              Reprendre
            </button>
          } */}
        </div>
      ) : (
        <Carte initialCardId={ firstCardId ?? lastCardId } gameId={gameId} />
      )}    </section>
  )
}
