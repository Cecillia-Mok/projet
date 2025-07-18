'use client'
import Loader from "@/components/loader"
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useAuth } from '@/context/authContext'

export default function Partie() {
    const router = useRouter();
    const { user, loading } = useAuth()

    // Redirige si l’utilisateur n’est pas connecté
    useEffect(() => {
        if (!loading && !user) {
            router.push('/connexion')
        }
    }, [loading, user, router])

    const startGame = () => {
        router.push('/partie')
    }

    if (loading || !user) return <Loader />

    return (
        <section className="flex-1 text-center">
            <div>
                <h1 className="text-3xl mb-10 md:text-4xl">Prêt à débuter votre règne ?</h1>
                <p className="text-lg mb-10 mx-auto md:w-[75%]">D’après la légende, notre royaume naquit, au premier siècle de notre ère, de l’union de Soma, princesse des Nāgas, et de Kaundinya, plus tard nommé Kambu, brahmane provenu d’Inde. En guise de cadeau aux futurs époux, le roi des Nāgas, père de la mariée, bu l’eau qui recouvrait la région pour leur offrir une nouvelle terre. C’est ainsi que le nouveau royaume fut appelé Kambuja, qui signifie « ceux qui sont nés de Kambu ». Que vos choix mènent notre peuple khmer vers la prospérité…</p>
                <button
                    onClick={startGame}
                    className="mt-2.5 text-white bg-[#DA933C] transition duration-300 ease-in-out hover:bg-[#C4802D] px-4 py-2 font-semibold rounded-lg cursor-pointer"
                >
                    Commencer
                </button>
            </div>
        </section>
    )

}