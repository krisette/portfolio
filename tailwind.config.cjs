/** @type {import('tailwindcss').Config} */

module.exports = {
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
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        dmSans: ["DM Sans", "sans-serif"],
      },
      colors: {
      },
      height: {
        "almost": "calc(100vh - 4rem)",
      }
    },
  },
  plugins: [],
}
