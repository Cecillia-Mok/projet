'use client'
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/authContext';
import toast, { Toaster } from 'react-hot-toast';

export default function LogoutButton() {
  const { refresh } = useAuth()

  const router = useRouter();
  const handleLogout = async () => {
    await fetch('/api/deconnexion', {
      method: 'POST',
    });

    await refresh();
    router.push('/'); // Redirige vers la page d'accueil'
    toast.success('Déconnexion réussie.')
  };

  return (
    <>
      <Toaster toastOptions={{
        style: {
          border: '1px solid #553920',
          padding: '16px',
          color: '#553920',
          background: '#F7EAD9',
        },
        success: {
          iconTheme: {
            primary: '#8C0410',
            secondary: '#F7EAD9',
          },
        },
      }} />
      <button onClick={handleLogout} className="cursor-pointer">
        Déconnexion
      </button>
    </>
  );
}