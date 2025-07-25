'use client'
import Link from 'next/link';
import LogoutButton from './logoutButton';
import Loader from './loader';
import { useAuth } from '@/context/authContext';

export default function NavLinks({ onClick }: Readonly<{ onClick?: () => void }>) {
    const { user, isAdmin, loading } = useAuth()

    if(loading) { return <Loader /> }

    return (
        <ul className="text-lg space-y-5 py-20 bg-radial from-[#F7EAD9] from-50% to-[#F4D7B7] to-120% shadow-[0_0_20px_rgba(185,104,31,0.3)] rounded-lg">
            {isAdmin && ( // si un admin est connecté
                <>
                    <li className="hover:bg-[#F7EAD9] ">
                        <Link href="/admin/dashboard" onClick={onClick}>
                            Dashboard Admin
                        </Link>
                    </li>
                    <li className="hover:bg-[#F7EAD9] ">
                        <Link href="/admin/cartes" onClick={onClick}>
                            Carte
                        </Link>
                    </li>
                </>
            )}
            {user ? ( // si le user est connecté
                <>
                    <li className="hover:bg-[#F7EAD9] ">
                        <Link href="/partie" onClick={onClick}>
                            Commencer
                        </Link>
                    </li>
                    <li className="hover:bg-[#F7EAD9] ">
                        <Link href="/joueur" onClick={onClick}>
                            Profil
                        </Link>
                    </li>
                    <li className="hover:bg-[#F7EAD9]" onClick={onClick}>
                        <LogoutButton />
                    </li>
                </>
            ) : ( // s'il n'est pas connecté
                <>
                    <li className="hover:bg-[#F7EAD9] ">
                        <Link href="/" onClick={onClick}>
                            Accueil
                        </Link>
                    </li>
                    <li className="hover:bg-[#F7EAD9] ">
                        <Link href="/connexion" onClick={onClick}>
                            Connexion
                        </Link>
                    </li>
                </>
            )}

        </ul>
    )
}
