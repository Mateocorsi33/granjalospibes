/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        bebasneue: ["Bebas Neue", "sans-serif"],
      },
      backgroundImage: {
        'custom-image': 'url("https://cdn.discordapp.com/attachments/1062447758587473931/1184119287426855023/fondo-mosaico.png?ex=658ad005&is=65785b05&hm=8c7ef51f334b6edb4b39bbae2b23d88ee5e4abeb7cd9150f5a6e92d1dc94cbcc&")',
      },
    },
    colors: {
      primary: {
        1: "#113420", //fondo
      },
      secondary: {
        1: "#E4C853", //subtitulos, remarques
        2: "#F58220", // botones
        3: "#f4780d", // botones-hover
      },
    },
    theme: {
      extend: {},
    },
  },
  darkMode: "class",
  plugins: [],
});
