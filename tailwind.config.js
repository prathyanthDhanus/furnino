/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
         "custom-yellow" : "#af8f3a",
         "custom-white" : "#ffffff"
      },
      fontFamily: {
        sansation: ['MyCustomFont', 'sans-serif'],
      },
    },

  },
  plugins: [],
}     