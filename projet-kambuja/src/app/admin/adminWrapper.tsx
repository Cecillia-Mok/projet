'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/authContext';
import Loader from '@/components/loader';

export default function ClientAdminWrapper({ children }: { children: React.ReactNode }) {
  const { isAdmin, loading, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push('/connexion');
      } else if (!isAdmin) {
        router.push('/partie');
      }
    }
  }, [loading, isAdmin, user, router]);

  if (loading) return <Loader />;

  return <>{children}</>;
}
