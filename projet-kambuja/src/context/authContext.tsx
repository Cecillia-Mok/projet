'use client';
import { createContext, useContext, useEffect, useState } from 'react';

type User = {
  user_id: string;
  email: string;
  role: string;
};

/**
 * Typage pour décrire l’objet que le contexte AuthContext va exposer à toute l'application.
 */
type AuthContextType = {
  user: User | null;      // L'utilisateur connecté ou null
  loading: boolean;       // Indique si les données sont en cours de chargement
  isAdmin: boolean;       // Raccourci pour savoir si l'utilisateur est admin
  refresh: () => void;    // Fonction pour recharger l'utilisateur (ex: après connexion)
};

/**
 * Initialise le contexte AuthContext avec des valeurs par défaut,
 * qui seront utilisées tant que le AuthProvider ne les remplace pas.
 */
const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  isAdmin: false,
  refresh: () => {},
});

/**
 * Composant qui va fournir le contexte d’authentification à tous ses enfants (via children).
 */
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/me');
      if (!res.ok) throw new Error();
      const data = await res.json();
      setUser(data.user);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []); // appelé au chargement de la page, initialise le contexte avec l'état de l'utilisateur

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAdmin: user?.role === 'admin',
        refresh: fetchUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
// Permet d'accéder au contexte avec les valeurs par défaut de AuthContext