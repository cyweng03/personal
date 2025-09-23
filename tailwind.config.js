/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        first: "moveVertical 25s ease infinite",
        second: "moveInCircle 15s reverse infinite",
        third: "moveInCircle 25s linear infinite",
        fourth: "moveInCircle 25s ease infinite",
        fifth: "moveInCircle 15s ease infinite",
      },
      keyframes: {
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(20%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(20%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(20%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(100%)",
          },
        },
      },
    },
    screens: {
      sm: { max: "649px" }, // Everything up to 649px
      md: { min: "650px", max: "800px" }, // Between 650px and 800px
      lg: { min: "801px" }, // Everything larger than 800px
    },
  },
  plugins: [],
};
