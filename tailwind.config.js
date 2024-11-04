/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust the path according to your file structure
  ],
  theme: {
    extend: {
      fontFamily: {
        "open-sans": ['"Open Sans"', "sans-serif"],
      },
      colors: {
        woodBrown: "#9C6B4F", // RGB: 156, 107, 79
        turquoise: "#50BDB8", // RGB: 80, 189, 184
        lightGrey: "#E0E0E0", // RGB: 224, 224, 224
        pureWhite: "#FFFFFF", // RGB: 255, 255, 255
        /* Core Colors */
        "carnegie-red": "#C41230",
        "black-cmu": "#000000",
        "iron-gray": "#6D6E71",
        "steel-gray": "#E0E0E0",

        /* Secondary Colors */
        "scots-rose": "#EF3A47",
        "gold-thread": "#FDB515",
        "green-thread": "#009647",
        "teal-thread": "#008F91",
        "blue-thread": "#043673",
        "highlands-sky-blue": "#007BC0",

        /* Campus Palette */
        "machinery-hall-tan": "#BCB49E",
        "kittanning-brick-beige": "#E4DAC4",
        "hornbostel-teal": "#1F4C4C",
        "palladian-green": "#719F94",
        "weaver-blue": "#182C4B",
        "skibo-red": "#941120",
      },
      // for professorProfile.tsx
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateX(-10px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeOut: {
          "0%": { opacity: "1", transform: "translateX(0)" },
          "100%": { opacity: "0", transform: "translateX(-10px)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.2s ease-out forwards",
        fadeOut: "fadeOut 0.2s ease-out forwards",
      },
    },
  },
  plugins: [],
};
