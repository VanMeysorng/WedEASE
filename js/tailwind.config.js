/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        'wedding-pink': '#f9c5d1',
        'wedding-gold': '#d4af37',
        'wedding-blue': '#c2e9fb'
      },
      fontFamily: {
        'script': ['Brush Script MT', 'cursive'],
      }
    },
  },
  plugins: [],
}