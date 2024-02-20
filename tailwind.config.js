/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#284D76",
        colorOrangeHover: "#F28E63",
      },
    },
  },
  plugins: [],
};