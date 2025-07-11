'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '../../components/button';

export default function Inscription({ onClick }: Readonly<{ onClick?: () => void }>) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ email?: string; password?: string; server?: string }>({});

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault() // empêche le rechargement de la page
    setErrors({}) // réinitialise les erreurs
    setSuccess(null);

    try {
      // Envoi des infos de l'inscription
      const res = await fetch('/api/inscription', {
        method: 'POST',
        body: JSON.stringify({ email, password }), // envoie les données au format json
        headers: { 'Content-Type': 'application/json' }, // précise qu'on envoie du json
      });

      let data; // let permet de définir data ultérieurement
      try {
        data = await res.json();  // on tente de parser la réponse en json
      } catch (err) {
        console.error('Erreur JSON:', err); // message d'erreur si le parsing json échoue
        setErrors({ server: data?.error ?? "Erreur serveur.1" }); // réponse invalide
        return; // fin d'exécution
      }

      if (!res.ok) {
        if (data?.errors) {
          setErrors(data.errors); // plusieurs erreurs : { email, password }
        } else if (data?.error) {
          setErrors({ server: data.error }); // erreur unique
        } else {
          setErrors({ server: "Erreur serveur." });
        }
        return;
      }

      setSuccess('Inscription réussie.');
      setEmail('')
      setPassword('')
      router.push('/connexion')

    } catch (err) {
      console.error('Erreur de connexion :', err)
      setErrors({ server: "Erreur serveur ou réseau." })
    }
  }

  return (
    <main className="flex-1 place-content-center text-center">
      <div className="relative p-6 my-auto bg-radial from-[#F7EAD9] from-50% to-[#F4D7B7] to-120% shadow-[0_0_20px_rgba(185,104,31,0.3)] rounded-lg md:max-w-[400px] md:mx-auto">
        <h2 className="text-2xl mb-4 text-center">Inscription</h2>
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
            {errors.email && <p className="text-[#C20615] text-center mb-4">{errors.email}</p>}
          </div>
          <div className="text-left">
            <label>Mot de passe{/* */}
              <div className="relative">
                <button className={`absolute left-3.75 top-2.5 w-5 cursor-pointer ${showPassword ? "hidden" : ""}`}
                  onClick={togglePasswordVisibility} // Si showPassword à true, on cache l'icone eye, sinon on l'affiche
                >
                  <img src="/eye.svg" alt="afficher le mot de passe" />
                </button>
                <button
                  className={`absolute left-3.75 top-2.5 w-5 cursor-pointer ${showPassword ? "" : "hidden"}`}
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
          </div>
          {errors.password && <p className="text-[#C20615] text-center my-2">{errors.password}</p>}
          {errors.server && <p className="text-[#C20615] text-center my-2">{errors.server}</p>}
          {success && <p className="text-[#4DA451] text-center my-2">{success}</p>}
          <Button text="S'inscrire" />
        </form >
      </div >
    </main>
  )
}