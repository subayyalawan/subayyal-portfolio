/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "Bogart_Medium": "'Bogart-Medium', Georgia, 'Times New Roman', serif",
        "Biotif-Regular": '"Biotif Regular", Helvetica, Arial, sans-serif',
        // "georiga": "Biotif-Regular",
      },
      colors: {
        "Primary-Color": "rgba(18, 247, 214)",
        "Background": "#292f36"
      }
    },

  },
  plugins: [],
}

