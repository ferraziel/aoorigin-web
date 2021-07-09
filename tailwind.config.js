const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        silver: "var(--silver)",
        brown: "var(--brown)",
        bronze: "var(--bronze)",
        gray: {
          ...colors.trueGray,
          1000: "#111111",
        },
      },
      spacing: {
        96: "24rem",
        144: "36rem",
        192: "48rem",
      },
      fontFamily: {
        sans: ["'Alegreya Sans'", "sans-serif"],
        serif: ["Cardo", "serif"],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "2rem",
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === "production",
    content: ["components/**/*.vue", "layouts/**/*.vue", "pages/**/*.vue", "plugins/**/*.js", "nuxt.config.js"],
  },
};
