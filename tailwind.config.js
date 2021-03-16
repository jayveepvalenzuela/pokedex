module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    container: {
      screens: {
         md: '1140px',
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
