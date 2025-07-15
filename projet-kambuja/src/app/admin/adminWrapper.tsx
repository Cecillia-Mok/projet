'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/authContext';
import Loader from '@/components/loader';

/**
 * Cette fonction sert à vérifier le rôle de la personne qui accède à aux pages /admin.
 * Si l'utilisataur n'est pas connecté, il sera renvoyé sur la page connexion.
 * S'il est connecté mais pas admin, il sera renvoyé vers la page commencer.
 */
export default function ClientAdminWrapper({ children }: { children: React.ReactNode }) {
  const { isAdmin, loading, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push('/connexion');
      } else if (!isAdmin) {
        router.push('/commencer');
      }
    }
  }, [loading, isAdmin, user, router]);

  if (loading) return <Loader />;

  return <>{children}</>;
}
