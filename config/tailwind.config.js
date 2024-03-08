/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      "grey-1": "#384248", // Charcoal
      "grey-6": "#c4c4c4", // Weathered stone
      "grey-8": "#e1e1e1", // Grey
      "red-3": "#cd2d15", // Corsa, Darker
    },
  }
};
