/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      noirbackground: '#0D0F1E',
      grisbg:'#171C30',
      grisfooter: '#29325D',
      white: '#ffffff',
      black: '#000000',
      transparent: 'transparent',
      violet:'#92A1FF',
      rouge:'#FF8484',
      vert:'#92FFB1'
    },
    fontFamily: {
      jost: ['Jost', 'sans-serif'],
      cabin: ['Cabin', 'sans-serif'],
      dosis: ['Dosis', 'sans-serif'],
    },
    extend: {
      gridTemplateColumns: {
        principal: 'repeat(12, minmax(0, 64px))'
      }
    }
  },
  plugins: []
}
