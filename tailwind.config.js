/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#0F1E2D'
        },
        bg: {
          sheet: '#FFFFFF'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        helvetica: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
    }
  },
  plugins: []
}
