'use client'
import Image from "next/image";
import Button from "./button";
import Loader from "./loader";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type Choice = {
    choice_id: number;
    texte: string;
    default_next_card: number | null;
};

type Card = {
    card_id: number;
    titre: string;
    texte: string;
    image_url?: string;
    choice: Choice[];
    statut: string;
};

type CarteProps = {
    initialCardId?: number
}

export default function Carte({ initialCardId = 1 }: CarteProps) {
    const [card, setCard] = useState<Card | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();


    // Fonction pour récupérer une carte
    const fetchCard = async (cardId: number) => {
        setLoading(true);
        try {
            const res = await fetch(`/api/cartes/${cardId}`);
            const data = await res.json();
            setCard(data);
            updateHistorique(cardId);
        } catch (err) {
            console.error("Erreur lors du chargement de la carte", err);
        }
        setLoading(false);
    };

    // Historique local
    const updateHistorique = (id: number) => {
        const hist = JSON.parse(localStorage.getItem('historique') || '[]');
        hist.push(id);
        localStorage.setItem('historique', JSON.stringify(hist));
    };

    // useEffect(() => {
    //     const hist = JSON.parse(localStorage.getItem('historique') || '[]');
    //     const lastId = hist.length > 0 ? hist[hist.length - 1] : 1;
    //     fetchCard(lastId);
    // }, []);

    const handleChoice = (nextId: number | null) => {
        if (nextId) {
            fetchCard(nextId);
        } else {
            alert("Fin de l'histoire !");
        }
    };

    const handleRecommencer = () => {
        localStorage.removeItem("historique");
        fetchCard(1); // Recharger la carte de départ
    };

    const handleRedirectHome = () => {
        router.push('/commencer'); // ou une autre page dédiée
    };

    const handleVoirHistorique = () => {
        router.push('/joueur'); // ou une autre page dédiée
    };

    useEffect(() => {
        fetchCard(initialCardId)
    }, [initialCardId])

    if (loading || !card) return <Loader />;

    return (
        <div className="flex flex-col gap-5 mx-auto md:w-[55%]">
            <h2 className="text-xl font-bold mb-2">{card.titre}</h2>
            {card.image_url && <img src={card.image_url} alt="" className="mb-2 rounded mx-auto w-[75%] md:w-[60%] lg:w-[40%] shadow-lg" />}
            <p className="mb-4">{card.texte}</p>

            <div className="space-y-2">
                {card.choice?.map((c) => (
                    <button
                        key={c.choice_id}
                        onClick={() => handleChoice(c.default_next_card)}
                        className="w-full bg-[#DA933C] text-white py-2 px-4 rounded hover:bg-[#C4802D] cursor-pointer"
                    >
                        {c.texte}
                    </button>
                ))}
            </div>

            {card.statut === "fin de partie" && (
                <div className="space-x-2">
                    <button onClick={handleRecommencer} className="w-full">
                        <p className="text-white bg-[#DA933C] transition duration-300 ease-in-out hover:bg-[#C4802D] px-4 py-2 font-semibold rounded-lg cursor-pointer">Recommencer</p>
                    </button>
                    <button onClick={handleRedirectHome} className="w-full">
                        <p className="mt-2.5 text-white bg-[#DA933C] transition duration-300 ease-in-out hover:bg-[#C4802D] px-4 py-2 font-semibold rounded-lg cursor-pointer">Retourner sur l'accueil</p>
                    </button>
                    {/* <button onClick={handleVoirHistorique} className="w-full">
                        <p className="mt-2.5 text-white bg-[#DA933C] transition duration-300 ease-in-out hover:bg-[#C4802D] px-4 py-2 font-semibold rounded-lg cursor-pointer">Voir l'historique sur mon profil</p>
                    </button> */}
                </div>
            )}
        </div>
    );
    // return (
    //     <div className="flex flex-col gap-5">
    //         <h2 className="text-xl font-bold mb-2">{card.titre}</h2>
    //         {card.image_url && <img src={card.image_url} alt="" className="mb-2 rounded" />}
    //         <p className="mb-4">{card.texte}</p>

    //         <div className="space-y-2">
    //             {card.choice.map((c) => (
    //                 <Button
    //                     key={c.choice_id}
    //                     text={c.texte}
    //                     onClick={() => handleChoice(c.default_next_card)}
    //                     className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
    //                 />
    //             ))}
    //         </div>

    //         {card.statut === "fin de partie" && card.titre === "Fin du règne" && (
    //             <div className="mt-4 space-x-2">
    //                 <Button type="button" text="Recommencer" onClick={() => handleRecommencer()} />
    //                 <Button type="button" text="Voir historique de mes parties" onClick={() => handleVoirHistorique()} />
    //             </div>
    //         )}
    //     </div>
    // );
}