/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        "darkerPurple":"#411463",
        "darkerGrey":"#141311"
      }
    },
  },
  plugins: [],
}
