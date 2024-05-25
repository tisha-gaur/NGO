/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        'custom-tl' : '80px',
        'custom-tr' : '80px',
        'custom-bl' : '0px',
        'custom-br' : '80px'
      },
    },
  },
  plugins: [],
};
