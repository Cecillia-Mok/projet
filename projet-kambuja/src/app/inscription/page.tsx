'use client'
import Link from 'next/link'
import { useState } from 'react';
import FormButton from '../components/formButton';

export default function Inscription() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    //<>
    <div className="relative p-6 bg-radial from-[#F7EAD9] from-50% to-[#F4D7B7] to-120% shadow-[0_0_20px_rgba(185,104,31,0.3)] rounded-lg md:max-w-[400px] md:mx-auto">
        <h2 className="text-2xl mb-4 text-center">Inscription</h2>
        {error && <p className="text-[#C20615] text-center mb-4">{error}</p>}
        <form className="space-y-4"> {/* onSubmit={handleLogin} */}
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
          <FormButton>S'inscrire</FormButton>
        </form >
      </div >
    //</>
  )
}