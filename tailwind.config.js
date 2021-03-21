module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    container: {
      screens: {
         md: '1140px',
      }
    },
    extend: {
      colors: {
        'normal': '#A8A878',
        'fighting': '#C03028',
        'flying': '#A890F0',
        'poison': '#A040A0',
        'ground': '#E0C068',
        'rock': '#B8A038',
        'bug': '#A8B820',
        'ghost': '#705898',
        'steel': '#b8b8d0',
        'fire': '#f08030',
        'water': '#6890f0',
        'grass': '#78c850',
        'electric': '#f8d030',
        'psychic': '#f85888',
        'ice': '#98d8d8',
        'dragon': '#7038f8',
        'dark': '#705848',
        'fairy': '#ee99ac',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
