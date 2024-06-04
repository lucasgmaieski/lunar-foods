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
        tertiarylight: '#B89E63',
        jonquil: '#F0C808',
      },
      animation: {
        'spin-slow': 'spin 1s ease-in-out infinite',
        'wiggle': 'wiggle .5s ease-in-out 2',
        'vibrate': 'vibrate 0.3s linear 2',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(4deg)' },
        },
        vibrate: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-2px)' },
          '50%': { transform: 'translateX(2px)' },
          '75%': { transform: 'translateX(-2px)' },
        },
      },
      screens: {
        "xsm": "540px",
      },
    },
    
  },
  plugins: [
  ],
}