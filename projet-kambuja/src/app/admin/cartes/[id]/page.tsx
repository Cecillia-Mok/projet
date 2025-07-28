'use client'
import { useEffect, useState } from "react";
import Button from "@/components/button";
import { useRouter, useParams } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

interface Card {
    card_id: number;
    title: number;
    text: string;
    status: string;
}

export default function ModifCarte() {
    const { id } = useParams();
    const router = useRouter();

    const [card, setCard] = useState<Card | null>(null);
    const [newTitle, setNewTitle] = useState('');
    const [newText, setNewText] = useState('');
    const [newStatus, setNewStatus] = useState('');

    useEffect(() => {
        if (!id) return;

        const fetchCard = async () => {
            try {
                const res = await fetch(`/api/cartes/${id}`, {
                    credentials: 'include',
                });
                const data = await res.json();

                if (res.ok) {
                    setCard(data.card);
                    setNewTitle(data.card.title); // prérempli le titre actuel
                    setNewText(data.card.text); // prérempli le texte actuel
                    setNewStatus(data.card.status); // prérempli le statut actuel
                } else {
                    toast.error(data.error || 'Erreur lors du chargement.');
                }
            } catch (err) {
                toast.error('Erreur réseau.');
            }
        };

        fetchCard();
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!card) return;
        // if (card.title === newTitle || card.text === newText || card.status === newStatus) {
        //     toast.error("Aucune modification détectée.");
        //     setTimeout(() => {
        //         router.push('/admin/cartes');
        //     }, 1500);
        //     return;
        // }
        try {
            const res = await fetch(`/api/cartes/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({
                    card_id: card.card_id,
                    title: newTitle,
                    text: newText,
                    status: newStatus,
                }),
            });

            const data = await res.json();
            if (!res.ok) {
                toast.error(data.error || 'Erreur de mise à jour.');

            } else {
                toast.success('Carte mise à jour avec succès.');
                setTimeout(() => {
                    router.push('/admin/cartes');
                }, 1500); // attendre 1.5s pour laisser le toast s'afficher
            }

        } catch (err) {
            toast.error('Erreur réseau');
        }
    };

    return (
        <section className="flex-1 flex flex-col">
            <Toaster toastOptions={{
                style: {
                    border: '1px solid #553920',
                    padding: '16px',
                    color: '#553920',
                    background: '#F7EAD9',
                },
                success: {
                    iconTheme: {
                        primary: '#2E7D32',
                        secondary: '#F7EAD9',
                    },
                },
                error: {
                    iconTheme: {
                        primary: '#8C0410',
                        secondary: '#F7EAD9',
                    },
                },
            }} />
            <h2 className="text-4xl mb-10 text-center">Gestion des cartes</h2>
            <div className="flex-1 w-[90%] mx-auto">
                <h3 className="text-2xl mb-5 text-left">Modifier la carte <strong>{card?.title}</strong></h3>
                <div className="p-6 bg-radial from-[#F7EAD9] from-50% to-[#F4D7B7] to-120% shadow-[0_0_10px_rgba(185,104,31,0.3)] rounded-lg">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="text-left">
                            <label htmlFor="card-title">Titre</label>
                            <input
                                type="text"
                                value={newTitle}
                                onChange={(e) => setNewTitle(e.target.value)}
                                placeholder={newTitle}
                                className="w-full pl-2 md:pl-11 pr-4 py-2 bg-[#F7EAD9] border border-[#DA933C] rounded-lg focus:outline-none"
                            />
                            <label htmlFor="card-title">Texte</label>
                            <textarea
                                value={newText} name="card-title" id="card-title"
                                onChange={(e) => setNewText(e.target.value)}
                                className="w-full md:max-h-50 pl-2 md:pl-11 pr-4 py-2 bg-[#F7EAD9] border border-[#DA933C] rounded-lg focus:outline-none"
                            >{newText}</textarea>
                            <label htmlFor="card-status">Statut de la carte</label>
                            <select
                                id="card-status"
                                className="block w-full mt-1 p-2 border rounded"
                                value={newStatus}
                                onChange={(e) => setNewStatus(e.target.value)}
                            >
                                <option value="">Sélectionner un statut</option>
                                <option value="continuer">Continuer</option>
                                <option value="fin de partie">Fin de partie</option>
                            </select>
                        </div>
                        <Button text="Valider" />
                    </form >
                </div>
            </div>
        </section>
    )
}