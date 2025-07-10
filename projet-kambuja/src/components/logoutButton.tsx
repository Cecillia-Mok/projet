'use client'
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/authContext';

export default function LogoutButton() {
    const { refresh } = useAuth()

    const router = useRouter();
    const handleLogout = async () => {
        await fetch('/api/deconnexion', {
            method: 'POST',
        });
        
        await refresh();
        router.push('/'); // Redirige vers la page d'accueil'
    };

  return (
    <button onClick={handleLogout} className="cursor-pointer">
      Déconnexion
    </button>
  );
}