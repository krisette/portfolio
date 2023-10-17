import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#121212",
        onBackground: "#EDEDED",
        primary: {
          DEFAULT: '#936982',
          light: '#A57A92'
        },
        accent: {
          lightest: '#FFD1DC',
          light: '#f2cdd7'
        },
        secondary: {
          DEFAULT: '#9F5470',
          dark: '#4D2E3D'
        }
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".hover-underline-animation": {
          position: "relative",
          color: "#fff",
        },
        ".hover-underline-animation:after": {
          content: '""',
          position: "absolute",
          width: "100%",
          transform: "scaleX(0)",
          height: "4px",
          bottom: "0",
          left: "0",
          backgroundColor: "#f2cdd7",
          transformOrigin: "bottom right",
          transition: "transform 0.25s ease-out",
        },
        ".hover-underline-animation:hover:after": {
          transform: "scaleX(1)",
          transformOrigin: "bottom left",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
export default config;
