/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1220px',
    },
    fontSize: {
      sm: '0.8rem',
      md: '0.9rem',
      base: '1rem',
      lg: '1.15rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '5.052rem',
      '7xl': '7.052rem',
      '8xl': '9.052rem',
    },
    colors: {
      transparent: 'transparent',
      'navy': {
        //If you don't explicitly declare a color for a property, Tailwind will use the default color for that property. 
        DEFAULT:'#16142F',
        light: '#292562',
    },
      'pink': '#D2295A',
      'alt-pink': '#DF7090',
      'white': '#FFFFFF',
      'alt-white': '#C7CCDB',
      'alt-blue': '#292562',
      'blue': '#242244',
      'gray': '#242238',
      'alt-gray': '#242244',
      'icon-gray': '#2A324B',
      'blue-connect': '#1D1A3F',
    },
    fontFamily: {
      main: ['Barlow', 'sans-serif'],
      mainCond: ['Barlow Condensed', 'sans-serif'],
      btn: ['Source Code Pro', 'monospace'],
      title: ['Zen Dots', 'cursive'],
      connect: ['Inria Sans', 'sans-serif'],
      barcode: ['Libre Barcode 39 Text', 'cursive'],  
    },
    
  },
 
  plugins: [
  ],
},
}