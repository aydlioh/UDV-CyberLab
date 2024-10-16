const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#DDE0F1',
        foreground: '#343976',
        second: '#9599CC',
        link: '#3568FF',

        controls: '#E9E9F1',
        white: '#FDFDFD',
        gray: '#B9BACA',
        orange: '#F29F26',
      },
      fontFamily: {
        inter: ['Inter Variable', 'sans-serif'],
        w3ip: ['W3-ip', 'sans-serif'],
      },
      backgroundImage: {
        'main-gradient': 'linear-gradient(90deg, #343976, #9599CC)',
      },
      container: {
        center: true,
      },
      screens: {
        mobile: '440px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
