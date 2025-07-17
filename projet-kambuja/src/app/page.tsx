import Link from 'next/link'
import Button from '../components/button';

export default function Index() {
  return (
    <section className="m-auto">
      <h1 className="text-3xl mb-10 md:text-4xl">Bienvenue, Roi de Kambuja</h1>
      <p className="text-lg mb-2 mx-auto md:w-[75%]">Bonjour !</p>
      <p className="text-lg mb-2 mx-auto md:w-[75%]">Je vous présente ici mon Projet Chef d'Œuvre réalisé dans le cadre de la formation développeur web et web mobile.</p>
      <p className="text-lg mb-2 mx-auto md:w-[75%]">J'ai souhaité réaliser un petit jeu qui portait sur l'histoire du Cambodge, le pays d'origine de mes parents.</p>
      <p className="text-lg mb-2 mx-auto md:w-[75%]">Il s'agit encore de la toute première version, mais j'espère qu'il vous plaira !</p>
      <div className="flex justify-center gap-10 mt-10">
        <Link href="/connexion">
          <Button text="Connexion" />
        </Link>
        <Link href="/inscription">
          <Button text="Inscription" />
        </Link>
      </div>
    </section>
  );
}
