/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'bar-gold': '#D4AF37',
        'bar-dark': '#1A1A1A',
        'bar-burgundy': '#800020'
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'display': ['Playfair Display', 'serif']
      }
    },
  },
  plugins: [],
}