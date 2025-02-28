import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        secondaryLight: 'var(--secondary-light)',
        secondaryDark: 'var(--secondary-dark)',
        secondaryDarker: 'var(--secondary-darker)',
        acsent: 'var(--acsent)',
        acsentLight: 'var(--acsent-light)',
      },      
    },
  },
  plugins: [],
};

export default config;
