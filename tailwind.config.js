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
