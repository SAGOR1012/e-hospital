/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    keyframes: {
      blinkColor: {
        '0%, 100%': { color: '#f87171' }, // red-400
        '50%': { color: '#8ac640' }, // blue-400
      },
    },
    animation: {
      blinkColor: 'blinkColor 1s step-start infinite',
    },
    // colors: {
    //   theme_color: 'rgb(75, 188, 215)',
    // },
  },
  plugins: [require('daisyui')],
};
