/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screen: {
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors: {
        seaGreen: 'hsl(146, 50%, 36%)',
        teal: 'hsl(180, 100%, 25%)',
      }
    },
  },
  plugins: [],
}
