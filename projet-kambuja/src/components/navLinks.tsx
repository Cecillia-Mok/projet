'use client'
import Link from 'next/link';
import LogoutButton from "./logoutButton";
// import { useUser } from '@/context/UserContext'

export default function NavLinks({ onClick }: Readonly<{ onClick?: () => void }>) {
    return (
        <ul className="text-lg space-y-5 py-20 bg-radial from-[#F7EAD9] from-50% to-[#F4D7B7] to-120% shadow-[0_0_20px_rgba(185,104,31,0.3)] rounded-lg">
            <li className="hover:bg-[#F7EAD9] ">
                <Link href="/" onClick={onClick}>
                    Accueil
                </Link>
            </li>
            <li className="hover:bg-[#F7EAD9] ">
                <Link href="/admin/accueil" onClick={onClick}>
                    Admin
                </Link>
            </li>
            <li className="hover:bg-[#F7EAD9] ">
                <Link href="/connexion" onClick={onClick}>
                    Connexion
                </Link>
            </li>
            <li className="hover:bg-[#F7EAD9] ">
                <Link href="/joueur" onClick={onClick}>
                    Joueur
                </Link>
            </li>
            <li className="hover:bg-[#F7EAD9] ">
                <Link href="/partie" onClick={onClick}>
                    Partie
                </Link>
            </li>
            <li className="hover:bg-[#F7EAD9] ">
                <Link href="/commencer" onClick={onClick}>
                    Commencer
                </Link>
            </li>
            <li className="hover:bg-[#F7EAD9] ">
                <Link href="/carte" onClick={onClick}>
                    Carte
                </Link>
            </li>
            <li className="hover:bg-[#F7EAD9] ">
                <LogoutButton />
            </li>
        </ul>
    )
}
