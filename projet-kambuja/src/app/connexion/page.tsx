'use client'
import Link from 'next/link'
import { useState } from 'react';
import Button from '@/components/button';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/authContext';
import Loader from '@/components/loader';

export default function Connexion({ onClick }: Readonly<{ onClick?: () => void }>) {
  const { loading, refresh } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<string | null>(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault() // empêche le rechargement de la page
    setErrors(null) // réinitialise les erreurs

    try {
      // Envoi des infos de connexion
      const res = await fetch('/api/connexion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include', // Important pour que le cookie soit bien envoyé
      })

      if (loading) return <Loader />;

      let data; // let permet de définir data ultérieurement
      try {
        data = await res.json();  // on tente de parser la réponse en json
      } catch (err) {
        console.error('Erreur JSON:', err); // message d'erreur si le parsing json échoue
        setErrors("Échec de la connexion."); // réponse invalide
        return;
      }

      if (!res.ok) {
        setErrors(data.errors ?? 'Échec de la connexion.');
        return;
      }

      // Appelle refresh() pour mettre à jour user et loading
      await refresh();    

      // Récupération des infos de l'utilisateur connecté
      const meRes = await fetch('/api/me', {
        method: 'GET',
        credentials: 'include',
      });

      const meData = await meRes.json();

      if (!meRes.ok) {
        setErrors(meData.errors ?? 'Échec de la récupération des infos utilisateur.');
        return;
      }

      console.log(meData.user); // utilisateur connecté (id, email, role)

      setEmail('')
      setPassword('')

      // Redirection selon le rôle
      const role = meData.user.role;
      if (role === 'admin') {
        router.push('/admin/accueil');
      } else {
        router.push('/partie');
      }
    } catch (err) {
      console.error('Erreur de connexion :', err)
      setErrors('Erreur réseau ou serveur.')
    }
  }

  return (
    <main className="flex-1 place-content-center text-center">
      <div className="relative p-6 bg-radial from-[#F7EAD9] from-50% to-[#F4D7B7] to-120% shadow-[0_0_20px_rgba(185,104,31,0.3)] rounded-lg md:max-w-[400px] md:mx-auto">
        <h2 className="text-2xl mb-4 text-center">Connexion</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-left">
            <label>Email{/* */}
              <div className="relative">
                <img src="mail.svg" alt="" className="absolute left-3.75 top-2.5 w-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Votre email'
                  className="w-full pl-11 pr-4 py-2 bg-[#F7EAD9] border border-[#DA933C] rounded-lg focus:outline-none"
                  required
                />
              </div>
            </label>
          </div>
          <div className="text-left">
            <label>Mot de passe{/* */}
              <div className="relative">
                <button className={`absolute left-3.75 top-2.5 w-5 cursor-pointer focus:none ${showPassword ? "hidden" : ""}`}
                  onClick={togglePasswordVisibility} // Si showPassword à true, on cache l'icone eye, sinon on l'affiche
                >
                  <img src="/eye.svg" alt="afficher le mot de passe" />
                </button>
                <button
                  className={`absolute left-3.75 top-2.5 w-5 cursor-pointer focus:none ${showPassword ? "" : "hidden"}`}
                  onClick={togglePasswordVisibility} // Si showPassword à true, on affiche l'icone eye, sinon on le cache
                >
                  <img src="/eye-off.svg" alt="cacher le mot de passe" />
                </button>
                <input
                  type={showPassword ? 'text' : 'password'} // Si showPassword à true, type text sinon type password
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Votre mot de passe'
                  className="w-full pl-11 pr-4 py-2 bg-[#F7EAD9] border border-[#DA933C] rounded-lg focus:outline-none"
                  required
                />
              </div>
            </label>
            {errors && <p className="text-[#C20615] text-center mb-4">{errors}</p>}
          </div>
          <Button text="Se Connecter" />
        </form >
        <div className="flex justify-end mt-5 gap-2">
          <p>Pas de compte ?</p>
          <Link href="/inscription">
            <button className="cursor-pointer"> S'inscrire</button>
          </Link>
        </div>
      </div >
    </main>
  )
}
