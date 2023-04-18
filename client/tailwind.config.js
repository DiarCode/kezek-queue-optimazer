/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(280px, 1fr))",
      },
      colors: {
        white: "#fbfbfd",
        black: "#202426",
        cgray: "#f5f5f7",
        primary: "#E74646",
        primary_light: "#EE7D7D",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
