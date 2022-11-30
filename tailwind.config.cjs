/** @type {import('tailwindcss').Config} */

const {fontFamily} = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#6A33F8',
        secondary: '#301E5F',
        light: '#F8F8F8',
        danger: '#C44021',
        success: '#0067CE',
        gray: '#797979',
      },
      fontFamily: {
        sans: ['Noto Sans TC', ...fontFamily.sans],
      },
      fontSize: {
        h1: ['2rem', '2.6875rem'],
        h2: ['1.75rem', '2.375rem'],
        h3: ['1.25rem', '1.6875rem'],
      },
    },
  },
  plugins: [],
};
