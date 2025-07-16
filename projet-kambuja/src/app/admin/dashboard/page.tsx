'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

interface User {
    user_id: number;
    pseudo: number;
    email: string;
    role: string;
}

export default function DashboardAdmin() {
    const [users, setUsers] = useState<User[]>([]);
    const fetchUsers = async () => {
        try {
            const res = await fetch('/api/users', { credentials: 'include' });

            if (res.status === 401) {
                // Redirection vers la page de connexion si non connecté
                window.location.href = '/connexion';
                return;
            }

            if (!res.ok) {
                toast.error('Erreur serveur');
                return;
            }

            const data = await res.json();
            setUsers(data.users || []);
        } catch (err) {
            console.error('Erreur réseau :', err);
            toast.error('Erreur réseau');
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    if (!users || users.length === 0) return <p className="flex-1 text-center mt-10">Aucun utilisateur trouvé.</p>;

    const handleDelete = async (user_id: number, role: string) => {
        if (role === 'admin') {
            toast.error('Impossible de supprimer un admin.');
            return;
        }

        const confirm = window.confirm('Confirmer la suppression de cet utilisateur ?');
        if (!confirm) return;

        // Animation CSS
        const card = document.getElementById(`user-${user_id}`);
        if (card) {
            card.classList.add('opacity-0', 'scale-95', 'transition', 'duration-300');
            await new Promise((res) => setTimeout(res, 300)); // 300ms
        }
        try {
            const res = await fetch('/api/users', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ user_id }),
                credentials: 'include',
            });

            const data = await res.json();
            if (!res.ok) {
                toast.error(data.error || 'Erreur lors de la suppression.');
                return;
            }
            // Mise à jour locale des users sans refetch
            setUsers((prev) => prev.filter((u) => u.user_id !== user_id));
            toast.success('Utilisateur supprimé');
        } catch (err) {
            console.error(err);
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
            <div className="relative w-full h-[70vh] flex flex-col justify-evenly md:w-[75%] mx-auto bg-radial from-[#855A34] from-30% to-[#553920] to-80% rounded-lg">
                <img src="/orange-corner.png" alt="" className="absolute -top-2 -left-2 size-8 lg:size-13 rotate-90" />
                <img src="/orange-corner.png" alt="" className="absolute -top-2 -right-2 size-8 lg:size-13 rotate-180" />
                <img src="/orange-corner.png" alt="" className="absolute -bottom-2 -left-2 size-8 lg:size-13" />
                <img src="/orange-corner.png" alt="" className="absolute -bottom-2 -right-2 size-8 lg:size-13 rotate-270" />

                <div className="text-left h-[70vh] pr-5 p-4 space-y-5 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-50 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-[#553920] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#DA933C]">
                    {users.map((user) => (
                        <div key={user.user_id} id={`user-${user.user_id}`} className="flex justify-between overflow-visible w-full mx-auto p-6 bg-radial from-[#F7EAD9] from-50% to-[#F4D7B7] to-120% shadow-[0_0_10px_rgba(185,104,31,0.3)] rounded-lg">
                            <div>
                                <p><strong>Pseudo :</strong> {user.pseudo}</p>
                                <p><strong>Rôle :</strong> {user.role}</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <Link href={`/admin/dashboard/editUser?user_id=${user.user_id}`}>
                                    <img src="/pen-tool.svg" alt="modifier" className="w-5 md:w-7 cursor-pointer" />
                                </Link>
                                <button onClick={() => handleDelete(user.user_id, user.role)}>
                                    <img src="/bin.svg" alt="supprimer" className="w-5 md:w-7 cursor-pointer" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
