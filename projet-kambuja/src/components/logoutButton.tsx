'use client'
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/deconnexion', {
      method: 'POST',
    });

    router.push('/'); // Redirige vers la page de connexion
  };

  return (
    <button onClick={handleLogout} className="cursor-pointer">
      Déconnexion
    </button>
  );
}