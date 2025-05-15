import { useState } from 'react';
import Input from '../components/input';
import FormButton from '../components/formButton';

export default function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
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
      <FormButton>Se connecter</FormButton>
    </form >
    );
  }
  