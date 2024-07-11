/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'krona': ['Krona one, sans-serif'],
        'poppins': ['poppins,sans-serif']
      },
      colors: {
        primary: '#0C080B',
        accent: '#ffae42',
        pink: "#fed2d1",
        'dark-grey': '#B8B8B8',
        'light-grey': '#ECECEC',
        light: '#FAFAFA',
        green: '#1E3329',
      },
    },
  },
  plugins: [],
}