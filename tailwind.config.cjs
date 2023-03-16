/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'text-primary': 'hsl(0, 0%, 95%)',
      bg: 'hsl(222, 47%, 11%)',
      border: 'hsla(0, 0%, 100%, 0.2)',
    },
    extend: {},
  },
  plugins: [],
};
