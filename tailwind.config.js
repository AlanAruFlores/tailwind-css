/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "vietnam": ["'Be Vietnam Pro'", "sans-serif"] //Importamos nombre de la fuente
      },
      colors:{
        "bright-red": "hsl(12, 88%, 59%)",
        "dark-blue":"hsl(228, 39%, 23%)",
        "dark-grayish-blue":"hsl(227, 12%, 61%)",
        "very-dark-blue":"hsl(233, 12%, 13%)",
        "very-pale-red":"hsl(13, 100%, 96%)",
        "very-light-gray":"hsl(0, 0%, 98%)"
      },
      backgroundImage:{
        "close-icon": "url('../images/icon-close.svg')",
        "hamburger-icon": "url('../images/icon-hamburger.svg')",
        "simplify-mob":"url('../images/bg-simplify-section-mobile.svg')",
        "simplify-dk":"url('../images/bg-simplify-section-desktop.svg')"
      }
    },
  },
  plugins: [],
}

