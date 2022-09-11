/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{html,js}'
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
        navMenu: "#1f1f1f",
        github: "#24292e",
        twitter: "#1da1f2",
        gmail: "#ea4335",
        spotify: "#1db954",
        instagram: "#3f729b",
      },
      height: {
        "almost": "calc(100vh - 4rem)",
      }
    },
  },
  plugins: [],
}
