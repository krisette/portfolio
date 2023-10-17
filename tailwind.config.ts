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
          height: "2px",
          bottom: "0",
          left: "0",
          backgroundColor: "#D4C9B0",
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
