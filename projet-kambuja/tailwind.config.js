// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        milonga: ['var(--font-milonga)'],
        spectral: ['var(--font-spectral)'],
      },
      backgroundImage: {
        'radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        travel: 'travel 2s linear infinite',
      },
      keyframes: {
        travel: {
          '0%': { 'strokeDashoffset': '0' },
          '100%': { 'strokeDashoffset': '-100' },
        },
      },
    },
  },
  plugins: [],
};
