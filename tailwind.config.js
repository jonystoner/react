const { colors: defaultColors } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...defaultColors,
      orange: {
        400: "#ea7c52",
        500: "#FF6932",
        600: "#d4592b",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
