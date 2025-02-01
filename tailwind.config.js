/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
          'instagram-gradient': 'linear-gradient(45deg, #f5a623, #f44336, #9c27b0, #3f51b5, #2196f3, #5D31CA)',
        },
      keyframes: {
        "moving-shadow": {
          "0%, 100%": { boxShadow: "0 0 10px #3b82f6, 0 0 20px #2563eb, 0 0 40px #1e40af" },
          "50%": { boxShadow: "0 0 20px #2563eb, 0 0 30px #1e40af, 0 0 50px #1d4ed8" },
        },
        
      },
      animation: {
        "moving-shadow": "moving-shadow 2s infinite",
      },
      container: {
        center: true,
      },
      fontFamily: {
        'latoNav': ["Lato", "sans-serif"],
        'oswaldHd': ["Oswald", "sans-serif"],
        'playfair': ["Playfair Display", "serif"],
        'merri': ["Merriweather","serif"],
        'nav': ["PT Sans Narrow", "sans-serif"],
        'slab': ["Roboto Slab", "serif"],
        'narrow': ["PT Sans Narrow", "sans-serif"],
        'headFont': ["Ga Maamli", "sans-serif"],
        'subHed': ["Libre Baskerville", "serif"],
        'montserrat': ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [
  ],
}


