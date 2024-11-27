/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateY(0)" },
          "66%": { transform: "translateY(-66%)" },
        },
      },
      animation: {
        scroll: "scroll 8s linear infinite",   //animate-[state] ou bien scroll: "none"; mais sa arrete l'animation avant quelle commence  ou bien"paused" jsp encore 2eme solution"slideIn 1.2s ease-in-out forwards"
       
        
      },
    },
  },
  plugins: [],
};
