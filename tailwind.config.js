const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      ...colors,
      grain: "#d7cec7",
      blackboard: "#565656",
      oxblood: "#76323f",
      tan: "#c09f80",
    },

    extend: {},
  },
  plugins: [],
};
