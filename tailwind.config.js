/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'Montserrat': ['Montserrat', 'sans-serif'],
        'SourceSerifPro': ['Source Serif Pro', 'serif'],
      },
      colors: {
        'off-white': '#F5F5F3',
        'moss': '#DDDECD',
        'moss-dark': '#B5B58B',
        'dark-green': '#4C783E',
        'dark-purple': '#777791',
        

    },
      fontSize: {
        'nav-font-size': '0.8125rem',
      },
      lineHeight: {
        'nav-line-height': '1.8',
      },
      letterSpacing: {
        'nav-letter-spacing': '2px',
      },
      maxHeight: {
        'hero': '89vh',
      },
      height: {
        'hero': '89vh',
      },
    },
},
  plugins: [],
}
