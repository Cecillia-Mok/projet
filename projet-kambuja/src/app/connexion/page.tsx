'use client'
import Link from 'next/link'
import { useState } from 'react';
import Form from '../components/form';

export default function Connexion() {
  const [error, setError] = useState('');

  return (
    //<>
      <div className="relative p-6 bg-radial from-[#F7EAD9] from-50% to-[#F4D7B7] to-120% shadow-[0_0_20px_rgba(185,104,31,0.3)] rounded-lg md:max-w-[400px] md:mx-auto">
        <h2 className="text-2xl mb-4 text-center">Connexion</h2>
        {error && <p className="text-[#C20615] text-center mb-4">{error}</p>}
        <Form></Form>
        <Link href="/inscription" className="flex justify-end mt-3">
          <button className="cursor-pointer">S'inscrire »</button>
        </Link>
      </div >
    //</>
  )
}
