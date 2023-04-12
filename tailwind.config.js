/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        white: "#fbfbfd",
        black: "#202426",
        primary: "#073CFA",
        primary_light: "#3862FB",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};