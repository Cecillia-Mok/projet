'use client'
import { useEffect, useState } from "react";
import Button from "@/components/button";
import { useRouter, useSearchParams } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';


interface User {
    user_id: number;
    pseudo: number;
    email: string;
    role: string;
}

export default function EditUser() {
    const searchParams = useSearchParams();
    const userId = searchParams.get('user_id');
    const router = useRouter();

    const [user, setUser] = useState<User | null>(null);
    const [newRole, setNewRole] = useState('');

    useEffect(() => {
        if (!userId) return;

        const fetchUser = async () => {
            try {
                const res = await fetch(`/api/users?id=${userId}`, {
                    credentials: 'include',
                });
                const data = await res.json();

                if (res.ok) {
                    setUser(data.user);
                    setNewRole(data.user.role); // prérempli le rôle actuel
                } else {
                    toast.error(data.error || 'Erreur lors du chargement.');
                }
            } catch (err) {
                toast.error('Erreur réseau.');
            }
        };

        fetchUser();
    }, [userId]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user) return;
        if (user.role === newRole) {
            toast.error("Aucune modification détectée.");
            setTimeout(() => {
                router.push('/admin/dashboard');
            }, 1500);
            return;
        }
        try {
            const res = await fetch('/api/users', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({
                    user_id: user.user_id,
                    role: newRole,
                }),
            });

            const data = await res.json();
            if (!res.ok) {
                toast.error(data.error || 'Erreur de mise à jour.');

            } else {
                toast.success('Rôle mis à jour avec succès.');
                setTimeout(() => {
                    router.push('/admin/dashboard');
                }, 1500); // attendre 1.5s pour laisser le toast s'afficher
            }

        } catch (err) {
            toast.error('Erreur réseau');
        }
    };

    return (
        <main className="flex-1 flex flex-col">
            <Toaster toastOptions={{
                style: {
                    border: '1px solid #553920',
                    padding: '16px',
                    color: '#553920',
                    background: '#F7EAD9',
                },
                success: {
                    iconTheme: {
                        primary: '#2E7D32',
                        secondary: '#F7EAD9',
                    },
                },
                error: {
                    iconTheme: {
                        primary: '#8C0410',
                        secondary: '#F7EAD9',
                    },
                },
            }} />
            <h2 className="text-4xl mb-10 text-center">Dashboard</h2>
            <div className="flex-1 w-[90%] mx-auto">
                <h3 className="text-2xl mb-5 text-left">Modifier le rôle de <strong>{user?.pseudo}</strong></h3>
                <div className="p-6 bg-radial from-[#F7EAD9] from-50% to-[#F4D7B7] to-120% shadow-[0_0_10px_rgba(185,104,31,0.3)] rounded-lg">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="text-left">

                            <label htmlFor="user-role">Rôle</label>
                            <select
                                id="user-role"
                                className="block w-full mt-1 p-2 border rounded"
                                value={newRole}
                                onChange={(e) => setNewRole(e.target.value)}
                            >
                                <option value="">Sélectionner un rôle</option>
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                        <Button text="Valider" />
                    </form >
                </div>
            </div>
        </main>
    )
}