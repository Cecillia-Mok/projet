'use client'
import Card from "@/components/card";
import Button from "@/components/button";
import Loader from "@/components/loader";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/authContext';

export default function Partie() {
  const { user, loading } = useAuth();
  const router = useRouter();

  // Redirection si non connecté
  useEffect(() => {
    if (!loading && !user) {
      router.push('/connexion'); // Redirige vers la page de connexion
    }
  }, [loading, user, router]);

  if (loading || !user) return <Loader />;

  return (
    <main className="flex-1 text-center">
      <div>
        <h1 className="text-4xl m-10">Page Partie</h1>
        <Button text="Commencer une partie" type="button"/>
      </div>
    </main>
  );
}
