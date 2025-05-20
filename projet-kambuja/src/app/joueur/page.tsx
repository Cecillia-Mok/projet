'use client'
export default function Joueur() {
  return (
    <main className="flex-1 text-center">
      <section className="flex flex-col gap-10 mt-10">
        <div>
          <h1 className="text-4xl">Bibliothèque</h1>
          <p>La page où le joueur peut consulter ses parties passées.</p>
        </div>
        <div>
          <h2>Chiffres</h2>
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
      </section>
    </main>
  )
}