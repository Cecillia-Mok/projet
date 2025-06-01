import Link from "next/link";

export default function Nav({ onClick }: Readonly<{ onClick?: () => void }>) {
    return (
        <nav>
            <ul className="flex flex-wrap gap-3 justify-center">
                <li>
                    <Link href="/" onClick={onClick} className="text-[#553920] hover:border-b-2 hover:pb-2">
                        Accueil
                    </Link>
                </li>
                <li>
                    <Link href="/connexion" onClick={onClick} className="text-[#553920] hover:border-b-2 hover:pb-2">
                        Connexion
                    </Link>
                </li>
                <li>
                    <Link href="/inscription" onClick={onClick} className="text-[#553920] hover:border-b-2 hover:pb-2">
                        Inscription
                    </Link>
                </li>
                <li>
                    <Link href="/joueur" onClick={onClick} className="text-[#553920] hover:border-b-2 hover:pb-2">
                        Joueur
                    </Link>
                </li>
                <li>
                    <Link href="/partie" onClick={onClick} className="text-[#553920] hover:border-b-2 hover:pb-2">
                        Partie
                    </Link>
                </li>
                <li>
                    <Link href="/commencer" onClick={onClick} className="text-[#553920] hover:border-b-2 hover:pb-2">
                        Commencer
                    </Link>
                </li>
                <li>
                    <Link href="/carte" onClick={onClick} className="text-[#553920] hover:border-b-2 hover:pb-2">
                        Carte
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
