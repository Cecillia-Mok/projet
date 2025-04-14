import type { Metadata } from "next";
import { Milonga,Spectral } from "next/font/google";
import "./globals.css";

const milonga = Milonga({
  subsets: ["latin"],
  weight: '400',
  display: 'swap',
});

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Kambuja Kingdom Game",
  description: "Le jeu où vous incarnez le roi de Kambuja.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={milonga.className}
      >
        {children}
      </body>
    </html>
  );
}
