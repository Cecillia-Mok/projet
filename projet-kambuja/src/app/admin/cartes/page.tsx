'use client';

import Loader from '@/components/loader';
import React, { useEffect, useState } from 'react';

type Carte = {
  card_id: number;
  titre: string;
  texte: string;
  choice: {
    choice_id: number;
    texte: string;
    next_card?: {
      card_id: number;
      titre: string;
    } | null;
  }[];
};

export default function CartesPage() {
  const [cartes, setCartes] = useState<Carte[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/cartes')
      .then(res => res.json())
      .then(data => {
        setCartes(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Erreur fetch cartes:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;

  return (
    <main className="flex-1 flex flex-col">
      <h2 className="text-4xl mb-10 text-center">Liste des cartes</h2>
      <div className="relative w-full h-[70vh] flex flex-col justify-evenly md:w-[75%] mx-auto bg-radial from-[#855A34] from-30% to-[#553920] to-80% rounded-lg">
        <img src="/orange-corner.png" alt="" className="absolute -top-2 -left-2 size-8 lg:size-13 rotate-90" />
        <img src="/orange-corner.png" alt="" className="absolute -top-2 -right-2 size-8 lg:size-13 rotate-180" />
        <img src="/orange-corner.png" alt="" className="absolute -bottom-2 -left-2 size-8 lg:size-13" />
        <img src="/orange-corner.png" alt="" className="absolute -bottom-2 -right-2 size-8 lg:size-13 rotate-270" />

        <div className="text-left h-[70vh] pr-5 p-4 space-y-5 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-50 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-[#553920] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#DA933C]">
          {cartes.map(carte => (
            <div key={carte.card_id} className="flex flex-col justify-between overflow-visible w-full mx-auto p-6 bg-radial from-[#F7EAD9] from-50% to-[#F4D7B7] to-120% shadow-[0_0_10px_rgba(185,104,31,0.3)] rounded-lg">
              <div>
                <h2 className="text-xl font-semibold">{carte.titre}</h2>
                <p className="mb-2">{carte.texte}</p>
              </div>

              <h3 className="font-semibold">Choix :</h3>
              <ul className=" ml-5">
                {carte.choice.length > 0 ? (
                  carte.choice.map(choix => (
                    <li key={choix.choice_id}>
                      {choix.texte}
                      {choix.next_card && (
                        <span className="ml-2 text-sm text-amber-600">
                          ► mène à <strong>{choix.next_card.titre}</strong>
                        </span>
                      )}
                    </li>
                  ))
                ) : (
                  <li className="text-amber-600">► Fin de partie</li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
