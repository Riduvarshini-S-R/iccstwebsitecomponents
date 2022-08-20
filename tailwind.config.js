/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'ourpink': '#C8447B',
        'ourpurple': '#331748',
        'babypink': '#EFC0D2',
        'gradpink':'#C92C6A',
        'gradpurple':'#461F72'
      }
    },
  },
  plugins: [],
}