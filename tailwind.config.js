const konstaConfig = require('konsta/config');

module.exports = konstaConfig({
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'), require('@tailwindcss/line-clamp')],
  darkMode: 'class',
});
