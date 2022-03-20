module.exports = {
  mode:'jit',
  purge:['./src/**/*.{js,jsx,ts,tsx}','./public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'primary':"#CC561E",
        'secondary':"#2EB086",
        'bg-button1':"#B958A5",
        'bg-button2':"#97DBAE",
        'bg-button3':"#61A4BC",
        'bg-button4':"#FF7800",
        'bg-button5':"#BB7171"
      }
    },
  },
  plugins: [],
}
