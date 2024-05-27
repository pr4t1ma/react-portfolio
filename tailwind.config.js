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
      peach: "#6b7632",
      forestgreen: "#82A3AC",
      green: "#32766A",
      gray: "#999",
    },

    extend: {},
  },
  plugins: [],
};
