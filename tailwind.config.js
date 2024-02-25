/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandRed: "#F24137",
        lightGray: "#4D4D4D",
        offWhite:'#F5F7FA'
      },
      fontFamily: {
        logoFont: "Irish Grover",
      },
    },
  },
  plugins: [],
};
