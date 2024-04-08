/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      scale: {
        175: "1.75",
      },
      colors: {
        btnColor: "#62BE4D",
        bgexpertise: "#007CAF",
        bgfooter: "#003E58",
        bgPower: "#4CA2C6",
        lineinput: "#E7E7E7",
      },
      fontFamily: {
        gilroy: ["gilroy", "sans-serif"],
      },
    },
  },
  plugins: [],
};
