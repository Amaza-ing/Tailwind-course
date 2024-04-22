/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto"],
    },
    extend: {
      screens: {
        tv: "1400px",
      },
      colors: {
        dark: "#2f3044",
        footer: "#24242c",
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
        "header-phone": "700px",
      },
      content: {
        arrow: "url('./assets/icon-arrow-light.svg')",
      },
      margin: {
        xxl: "500px",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
