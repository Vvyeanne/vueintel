/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
      screens: {
          '2xl': {'max': '1535px'},          
          'xl': {'max': '1279px'},
          'lg': {'max': '1023px'},
          'md': {'max': '767px'},
          'sm': {'max': '639px'},
          'xs' : {'max': '576px'}
      },
      extend: {
          colors: {
              "headColor" : "#008289",
              "btnColor" : "#5271FF",
              "footColor"  : "#60CED4",
              "dateColor" : "#B2B2B2",
              "boxHover": "#FFF5A7",
              "editBtn" : "#06C3B4",
              "delBtn" : "#C34F06"
          },
      },
  },
  plugins: [],
};
