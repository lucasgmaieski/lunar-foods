/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primarydark: '#000',
        secondarydark: '#272727',
        themecolor: 'rgb(var(--theme-color), <alpha-value>)',
        primarylight: '#fafaf9',
        secondarylight: '#dadada'
      },
      animation: {
        'spin-slow': 'spin 1s ease-in-out infinite',
      }
    },
    
  },
  plugins: [
  ],
}