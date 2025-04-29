// src/app/layout.tsx
import './globals.css';
import Footer from '../app/components/footer';
import Loader from '../app/components/loader';
import type { Metadata } from 'next';
import React, { Suspense } from 'react';
import { Milonga, Spectral } from 'next/font/google';

export const milonga = Milonga({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kambuja Kingdom Game',
  description: 'Le jeu où vous incarnez le roi de Kambuja.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="spectral h-screen flex flex-col justify-center text-[#553920] bg-radial from-[#F7EAD9] from-40% to-[#F4D7B7] to-80%">
        <main className='flex-1 place-content-center text-center'>
          <Suspense fallback={<Loader />}>
            {children}
          </Suspense>
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
