/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        bricolaga: ['Bricolaga Grotesque', 'sans-serif'],
        Jakarta: ['Plus Jakarta Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

