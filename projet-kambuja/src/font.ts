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
