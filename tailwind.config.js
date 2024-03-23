/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "550px" },
      // => @media (max-width: 1535px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
