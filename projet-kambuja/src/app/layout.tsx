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
          <div className="w-[48px] h-full absolute left-0 top-0">
            <div className="h-full bg-[url('/row.png')] bg-repeat-y bg-right bg-contain"></div>
          </div>
          <div className="w-[48px] h-full absolute right-0 top-0">
            <div className="h-full bg-[url('/row.png')] bg-repeat-y bg-left bg-contain scale-x-[-1]"></div>
          </div>
          <div className="flex-1 flex flex-col place-content-center text-center">
            <main className="flex-1 place-content-center text-center">
              <Suspense fallback={<Loader />}>
                {children}
              </Suspense>
            </main>
            <Footer></Footer>
          </div>
        </div>
      </body>
    </html>
  );
}
