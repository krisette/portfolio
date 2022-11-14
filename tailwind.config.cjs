/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./public/index.html', './src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '570px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {
      colors: {
        lightpink: '#f8bbd0',
        darkpink: '#ec407a'
      }
    }
  },
  plugins: []
};
