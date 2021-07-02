module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#ff6363',
        secondary: {
          100: '#e2e2d5',
          200: '#888883',
        },
        soul: {100: '#A4EBF3', 200: '#35D4E5', 300: '#07AFC2'},
        soul_light: '#CCF2F4',
        soul_background: '#F4F9F9',
        soul_gray: '#AAAAAA',
        soul_black: '#263238',
      },
      fontFamily: {
        Nunito: ['Nunito'],
      },
    },
  },
  variants: {
    extend: {
      tableLayout: ['responsive', 'hover', 'focus', 'active'],
    },
  },
  plugins: [],
};
