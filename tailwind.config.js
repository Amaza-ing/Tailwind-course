/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: "#2f3044",
      },
      backgroundImage: {
        circles: "url('./assets/bg-pattern-circles.svg')",
        intro: "url('./assets/bg-pattern-intro-desktop.svg')",
      },
    },
  },
  plugins: [],
};
