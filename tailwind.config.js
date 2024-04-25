/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-to-t': 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
      },
    },
  },
  plugins: [require('daisyui')],
};
