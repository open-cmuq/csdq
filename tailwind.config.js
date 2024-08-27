/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust the path according to your file structure
  ],
  theme: {
    extend: {
      colors: {
        woodBrown: "#9C6B4F", // RGB: 156, 107, 79
        turquoise: "#50BDB8", // RGB: 80, 189, 184
        lightGrey: "#E0E0E0", // RGB: 224, 224, 224
        pureWhite: "#FFFFFF", // RGB: 255, 255, 255
      },
    },
  },
  plugins: [],
};
