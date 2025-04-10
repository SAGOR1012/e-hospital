/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    // colors: {
    //   theme_color: 'rgb(75, 188, 215)',
    // },
  },
  plugins: [require('daisyui')],
};
