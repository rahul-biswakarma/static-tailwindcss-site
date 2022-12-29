/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*/*.html"],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      teko: ["Teko", "sans-serif"],
    },
    extend: {
      colors: {
        "primary-text": "#000000",
      },
    },
  },
  plugins: [],
};
