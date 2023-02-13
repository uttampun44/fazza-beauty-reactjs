/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      display: ['Inter']
    },
    fontSize:{
      sm: '14px'
    }
  },
  plugins: [],
}