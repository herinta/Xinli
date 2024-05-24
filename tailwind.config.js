/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary':'#762BEB',
      },
      boxShadow: {
        custom: '1px 1px 6px 6px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        '50': '50px',
      },
      spacing: {
        '61' : '248px'
      },
      fontWeight: {
        'extra-light': 200,
        'semi-bold': 500,
        'extra-bold': 700,
        'super-bold': 900
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

