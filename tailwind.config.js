/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'midnight': '#16181c',
        'midnight-600': '#111316',
        'midnight-700': '#0D0E10',
        'midnight-900': '#060708',
        'cn-d': '#5B9A0C',
        'cn': '#66ac0e',
        'cn-l': '#91f514',
      },
    },
  },
  plugins: [],
  darkMode: ['media'],
}
