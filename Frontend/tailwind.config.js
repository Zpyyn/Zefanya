/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#1E1000',
        'med': '#502F0C',
        'light': '#E0DBCE',
      },
      fontSize :{
        sm : '16px'
      }
    },
  },
  plugins: [],
};
