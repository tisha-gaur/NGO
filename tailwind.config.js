/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customCream:'#F8F4E1',
        navBrown: "#AF8260",
        textBrown: "#543310",
      },
      backgroundImage: {
        bg1: "url(bg2.jpg)",
      },
    },
  },
  plugins: [],
};
