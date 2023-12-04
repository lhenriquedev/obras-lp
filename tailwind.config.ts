import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        pattern: "url('./assets/patterns.png')",
      },

      colors: {
        background: "#121214",

        primary: {
          50: "#d0dcfb",
          100: "#aac0fe",
          200: "#a3b9f8",
          300: "#728fea",
          400: "#3652ba",
          500: "#1b3bbb",
          600: "#24388a",
          700: "#1B254B",
          800: "#111c44",
          900: "#0b1437",
        },
      },
    },
  },
  plugins: [],
};
export default config;
