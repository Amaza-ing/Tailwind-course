/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto"],
    },
    extend: {
      colors: {
        dark: "#2f3044",
      },
      backgroundImage: {
        circles: "url('./assets/bg-pattern-circles.svg')",
        intro: "url('./assets/bg-pattern-intro-desktop.svg')",
      },
      borderRadius: {
        xxl: "80px",
      },
      height: {
        header: "400px",
      },
      content: {
        arrow: "url('./assets/icon-arrow-light.svg')"
      }
    },
  },
  plugins: [],
};
