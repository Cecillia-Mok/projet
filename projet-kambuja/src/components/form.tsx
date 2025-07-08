import { useState } from 'react';
import Button from './button';
import { z } from 'zod';

// Schema pour l'inscription et la connexion
const zodSchema = z.object({
  email: z.string()
    .email({ message: "Vous devez saisir une adresse email." })
    .trim(),
  password: z.string()
    .min(8, { message: "Le mot de passe requiert un minimum de 8 caractères." })
    .trim(),
});

// export type ZodSchema = z.infer<typeof zodSchema>

export default function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null)
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault() // empêche le rechargement de la page
    setError(null) // réinitialise les erreurs
    const result = zodSchema.safeParse({ email, password })

    if (!result.success) {
      const errorMsg = result.error.errors[0]?.message || 'Données invalides'
      setError(errorMsg)
      return
    }

    try {
      // Envoi des infos de connexion
      const res = await fetch('/api/connexion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result.data),
        credentials: 'include', // Important pour que le cookie soit bien envoyé
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error ?? 'Échec de la connexion.')
        return
      }

      setEmail('')
      setPassword('')
    } catch (err) {
      console.error('Erreur de connexion :', err)
      setError('Erreur réseau ou serveur.')
    }
  }

  return (
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
      <Button text="Se Connecter" />
    </form >
    );
  }
  