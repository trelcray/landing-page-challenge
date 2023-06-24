import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-plus-jakarta-sans)", ...fontFamily.sans],
      },
      colors: {
        blue: { 200: "#f0f8ff", 400: "#2c83fb", 500: "#1f76f0" },
        gray: { 500: "#6c8291", 800: "#1c3c50" },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
