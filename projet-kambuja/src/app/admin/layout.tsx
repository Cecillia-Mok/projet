'use client'
import Loader from "@/components/loader";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/authContext';

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const { isAdmin, loading, user } = useAuth();
    const router = useRouter();

    // Redirection sous condition
    useEffect(() => {
        if (!loading) {
            if (!user) {
                router.push('/connexion'); // Pas connecté
            } else if (!isAdmin) {
                router.push('/partie'); // Connecté mais pas admin
            }
        }
    }, [loading, isAdmin, user, router]);

    if (loading || !isAdmin) return <Loader />;
    return (
        <>{children}</>
    )
}
