/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'contact-background': "url('./src/assets/images/CONTACT/my_background.jpg')",
      }),
      screens: {
        'smallMobile' : { 'max' : '350px' },
        'mobile' : '496px',
        'tablet' : '640px',
        'breakpoint': '767px',
        'laptop' : '1024px',
        'desktop': '1280px',
      },
      colors: {
        'primary': '#0d4628',
        'accent': '#01AF24',
        'highlight': '#03DC2E',
        'inActive': '#4D8060',
        'background': '#fbf4ec',
        'dark-background': '#1d1c20',
        green: {
          100 : '#389f3c', 
          200 : '#1f702c',
          300 : '#0d4628',
        },  
        white: {
          100 : '#FFFF',
          200 : '#f8f9fb',
        },
        black: {
          100 : '#06171e',
        },
      },
      fontFamily: {
        'vanilla' : ['Vanilla Ravioli', 'sans-serif'],
        'didact': ['Didact Gothic', 'sans-serif'],
        'japan' : ['HolidayMDJP05', 'sans-serif'],
        'japan-bold' : ['RiiTegakiFude', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      textColor: ['responsive', 'hover', 'focus', 'placeholder'],
    },

  },
  plugins: [],
}