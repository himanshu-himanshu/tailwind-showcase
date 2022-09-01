/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        sacramento: ["Sacramento", "cursive"],
      },
      colors: {
        primary: "#0a192f",
      },
    },
  },
  plugins: [],
};
