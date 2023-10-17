/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#040440', 
        primary_hover: '#8d72d92d', 
      },
    },
  },
  plugins: [],
}