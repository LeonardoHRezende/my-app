const defaultTheme = require("tailWindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
