import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B6B', // Vurgu rengi
        background: '#F7F7F7', // Açık gri arkaplan
        dark: '#1A1A1A', // Koyu tonlar
        light: '#FFFFFF', // Beyaz
        grayText: '#6B7280', // Açık gri metin
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        section: '6rem', // Bölüm aralıkları
        card: '1.5rem', // Kart içi boşluk
        content: '4rem', // İçerik genişliği için boşluk
      },
      screens: {
        sm: '480px', // Küçük cihazlar
        md: '768px', // Tablet
        lg: '1024px', // Küçük masaüstü
        xl: '1280px', // Büyük masaüstü
        '2xl': '1536px', // Ekstra büyük ekranlar
      },
    },
  },
  plugins: [],
};
