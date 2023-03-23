/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'text-primary': 'hsl(0, 0%, 95%)',
      bg: 'hsl(222, 47%, 11%)',
      'bg-lighter': 'hsl(222, 30%, 20%)',
      border: 'hsla(0, 0%, 100%, 0.1)',
    },
    extend: {},
  },
  plugins: [],
};
