/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors:{
      'navbar' : '#979797',
      'profil' : '#d0d0d0',
      'card-mage': '#cbcbcb',
      'button' : "#656565"
    } ,
    screens:{
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px'
    },
    extend: {},
  },
  plugins: [],
}
