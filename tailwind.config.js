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
        primarydark: '#705E31',
        secondarydark: '#5B491B',
        tertiarydark: '#3D2E09',
        themecolor: 'rgb(var(--theme-color), <alpha-value>)',
        primarylight: '#FFF1D0',
        secondarylight: '#DBC797',
        tertiarydark: '#B89E63',
        blueSapphire: '#086788',
        blueGreen: '#07A0C3',
        jonquil: '#F0C808',
        papayaWhip: '#FFF1D0',
        papayaWhipdark: '#705E31',
        maximumRed: '#DD1C1A',
      },
      animation: {
        'spin-slow': 'spin 1s ease-in-out infinite',
      }
    },
    
  },
  plugins: [
  ],
}