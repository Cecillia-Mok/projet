'use client'
import Carte from "@/components/carte"
import Loader from "@/components/loader"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/authContext'

export default function Partie() {
  const router = useRouter()
  const { user, loading } = useAuth()

  // const [gameStarted, setGameStarted] = useState(false)
  // const [lastCardId, setLastCardId] = useState<number | null>(null);
  // const [canResume, setCanResume] = useState(false)

  // Redirige si l’utilisateur n’est pas connecté
  useEffect(() => {
    if (!loading && !user) {
      router.push('/connexion')
    }
  }, [loading, user, router])

  // Récupère la dernière carte saved dans le localstorage pour l'afficher si on reprend la dernière partie
  // useEffect(() => {
  //   const checkLastCard = async () => {
  //     const historique = JSON.parse(localStorage.getItem("historique") || "[]");
  //     if (historique.length === 0) return;

  //     const lastId = historique[historique.length - 1];

  //     try {
  //       const res = await fetch(`/api/cartes/${lastId}`);
  //       const data = await res.json();

  //       if (data.statut !== "fin de partie") {
  //         setLastCardId(lastId);
  //         setCanResume(true)
  //       }
  //     } catch (err) {
  //       console.error("Erreur lors de la récupération de la dernière carte", err);
  //     }
  //   };

  //   checkLastCard();
  // }, []);

  // Fonction pour démarrer la partie
  // const startGame = () => {
  //   localStorage.removeItem("historique")
  //   setLastCardId(1)
  //   setGameStarted(true)
  // }

  // Reprendre la dernière partie en cours
  // const resumeGame = () => {
  //   setGameStarted(true)
  // }

  if (loading || !user) return <Loader />

  return (
    <main className="flex-1 text-center">
      {/* {!gameStarted ? (
        <div>
          <h1 className="text-4xl m-10">Prêt à débuter votre règne ?</h1>

          <button
            onClick={startGame}
            className="mt-2.5 text-white bg-[#DA933C] transition duration-300 ease-in-out hover:bg-[#C4802D] px-4 py-2 font-semibold rounded-lg cursor-pointer"
          >
            Commencer
          </button>

          {canResume &&
            <button
              onClick={resumeGame}
              className="mt-2.5 text-white bg-[#DA933C] transition duration-300 ease-in-out hover:bg-[#C4802D] px-4 py-2 font-semibold rounded-lg cursor-pointer"
            >
              Reprendre
            </button>
          }
        </div>
      ) : (
        <Carte initialCardId={lastCardId ?? 1} />
      )} */}
      <Carte initialCardId={1} />
    </main>
  )
}
