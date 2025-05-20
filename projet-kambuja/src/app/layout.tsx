// src/app/layout.tsx
import './globals.css';
import Footer from '../app/components/footer';
import Loader from '../app/components/loader';
import Nav from './components/nav';
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
  title: 'Kambuja Kingdom',
  description: 'Le jeu où vous incarnez le roi de Kambuja.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="spectral h-screen text-[#553920] bg-radial from-[#F7EAD9] from-40% to-[#F4D7B7] to-80%">
        <div className="relative flex h-screen overflow-hidden">

          {/* Décoration haut / gauche */}
          <div className="absolute h-[48px] w-full sm:top-0 md:w-[48px] md:h-full md:left-0">
            <div className="bg-contain h-full sm:w-full bg-[url('/row-sm.png')] sm:bg-repeat-x sm:bg-bottom md:bg-[url('/row.png')] md:bg-repeat-y md:bg-right"></div>
          </div>

          {/* Décoration bas / droite */}
          <div className="absolute h-[48px] w-full bottom-0 md:w-[48px] md:h-full md:right-0">
            <div className="bg-contain h-full sm:w-full bg-[url('/row-sm.png')] sm:bg-repeat-x sm:bg-top scale-y-[-1] md:bg-[url('/row.png')] md:bg-repeat-y md:bg-left scale-x-[-1]"></div>
          </div>

          {/* Main au centre */}
          <div className="flex-1 flex flex-col place-content-center text-center m-15 md:mb-0">
            <Nav />
              <Suspense fallback={<Loader />}>
                {children}
              </Suspense>
            <Footer></Footer>
          </div>
        </div>
      </body>
    </html>
  );
}
