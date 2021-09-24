const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/components/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    fontFamily: {
      raleway: ['Raleway', ...defaultTheme.fontFamily.sans],
      montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      transparent: 'transparent',
      inherit: 'inherit',
      white: '#ffffff',
      gray: {
        50: '#f2f2f2',
        100: '#e0e0e0',
        200: '#bdbdbd',
        300: '#a9a9a9',
        400: '#828282',
        500: '#4f4f4f',
        600: '#333333',
      },
      black: '#000000',
      yellow: { light: '#f7df94' },
    },
    extend: {
      content: {
        empty: '""',
      },
    },
  },
};
