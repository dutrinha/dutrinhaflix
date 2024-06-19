/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'deadpool': "url('/public/deadpool.jpg')",
      },
      colors: {
        'cor1': '#00162F',
        'branco': '#FFFFFF',
        'preto': "#000000"
      }
    },
  },
  plugins: [],
}
