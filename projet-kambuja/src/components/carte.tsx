'use client'
import Loader from "./loader";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast, { Toaster } from "react-hot-toast";

type Choice = {
    choice_id: number;
    text: string;
    consequence: string;
    next_card_id: number | null;
};

type Card = {
    card_id: number;
    title: string;
    text: string;
    image_url?: string;
    choices: Choice[];
    status: string;
};

type CarteProps = {
    initialCardId: any;
    gameId: any;
}

export default function Carte({ initialCardId, gameId }: CarteProps) {
    const [card, setCard] = useState<Card | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    // Fonction pour récupérer une carte
    const fetchCard = async (cardId: number) => {
        setLoading(true);
        try {
            const res = await fetch(`/api/cartes/${cardId}`);
            const data = await res.json();
            console.log(data);
            setCard(data);
            // updateHistorique(cardId);
        } catch (err) {
            console.error("Erreur lors du chargement de la carte", err);
        }
        setLoading(false);
    };

    // Ajoute les cartes et choix dans 
    const handleChoice = async (nextId: number | null, consequence: string | null, choiceId: number) => {
        try {
            const res = await fetch(`/api/partie/${gameId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    choice_id: choiceId,
                    card_id: card?.card_id
                }),
            });

            const choice = await res.json();
            if (!res.ok) throw new Error(choice.error || "Erreur");

            if (nextId) {
                if (consequence && consequence.trim() !== "") {
                    toast(<p>{consequence}</p>);
                }
                fetchCard(nextId);
            }
        } catch (err) {
            console.error("Erreur lors de la sauvegarde du choix :", err);
        }
    };

    // const handleRecommencer = () => {
    //     localStorage.removeItem("historique");
    //     fetchCard(1); // Recharger la carte de départ
    // };

    // const handleVoirHistorique = () => {
    //     router.push('/joueur'); // ou une autre page dédiée
    // };

    useEffect(() => {
        fetchCard(initialCardId)
    }, [initialCardId])

    if (loading || !card) return <Loader />;

    return (
        <div className="flex flex-col gap-5 mx-auto md:w-[55%]">
            <Toaster toastOptions={{
                duration: 6000,
                style: {
                    border: '1px solid #553920',
                    padding: '16px',
                    color: '#553920',
                    background: '#F7EAD9',
                },
            }} />
            <h2 className="text-xl font-bold mb-2">{card.title}</h2>
            {card.image_url && <img src={card.image_url} alt="" className="mb-2 rounded mx-auto w-[75%] md:w-[60%] lg:w-[30%] shadow-lg" />}
            <p className="mb-4">{card.text}</p>

            <div className="space-y-2">
                {card.choices?.map((c) => (
                    <button
                        key={c.choice_id}
                        onClick={() => handleChoice(c.next_card_id, c.consequence, c.choice_id)}
                        className="w-full bg-[#DA933C] text-white py-2 px-4 rounded hover:bg-[#C4802D] cursor-pointer"
                    >
                        {c.text}
                    </button>
                ))}
            </div>

            {card.status === "fin de partie" && (
                <div className="space-x-2">
                    {/* <button onClick={handleRecommencer} className="w-full mt-2.5 text-white bg-[#DA933C] transition duration-300 ease-in-out hover:bg-[#C4802D] px-4 py-2 font-semibold rounded-lg cursor-pointer">
                        Recommencer
                    </button> */}
                    <button onClick={() => window.location.reload()} className="w-full mt-2.5 text-white bg-[#DA933C] transition duration-300 ease-in-out hover:bg-[#C4802D] px-4 py-2 font-semibold rounded-lg cursor-pointer">
                        Retourner sur l'accueil
                    </button>
                    {/* <button onClick={handleVoirHistorique} className="w-full mt-2.5 text-white bg-[#DA933C] transition duration-300 ease-in-out hover:bg-[#C4802D] px-4 py-2 font-semibold rounded-lg cursor-pointer">
                        Voir l'historique sur mon profil
                    </button> */}
                </div>
            )}
        </div>
    );
    // return (
    //     <div className="flex flex-col gap-5">
    //         <h2 className="text-xl font-bold mb-2">{card.title}</h2>
    //         {card.image_url && <img src={card.image_url} alt="" className="mb-2 rounded" />}
    //         <p className="mb-4">{card.text}</p>

    //         <div className="space-y-2">
    //             {card.choice.map((c) => (
    //                 <Button
    //                     key={c.choice_id}
    //                     text={c.text}
    //                     onClick={() => handleChoice(c.next_card_id)}
    //                     className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
    //                 />
    //             ))}
    //         </div>

    //         {card.status === "fin de partie" && card.title === "Fin du règne" && (
    //             <div className="mt-4 space-x-2">
    //                 <Button type="button" text="Recommencer" onClick={() => handleRecommencer()} />
    //                 <Button type="button" text="Voir historique de mes parties" onClick={() => handleVoirHistorique()} />
    //             </div>
    //         )}
    //     </div>
    // );
}