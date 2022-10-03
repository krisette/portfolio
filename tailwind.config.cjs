/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './public/index.html',
    './src/**/*.{html,js,jsx,ts,tsx}'
  ],
  theme: {
    screens: {
      xs: '570px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
    },
  },
  plugins: [],
});
