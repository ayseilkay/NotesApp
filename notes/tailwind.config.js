module.exports = {
  mode:'jit',
  purge:['./src/**/*.{js,jsx,ts,tsx}','./public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'primary':"#CC561E",
        'secondary':"#2EB086"
      }
    },
  },
  plugins: [],
}
