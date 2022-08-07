/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm:'480px',
      md: '768px',
      lg:'976px',
      xl:'1440px'
},
    extend: {
      colors:{
        black: 'hsl{0,0%,0%}',
        grey:'hsl{0,0%,26%}',
        lightGrey:'hsl{0,0%,75%}',
        orange:'hsl{32,100%,51%}',
        superLightOrange:'rgb{255,247,237}',
        Orange:'rgb{251,146,60}'
      },
    },
  },
  plugins: [],
}
