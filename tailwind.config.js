export const COLOR_HEX_CODES = {
  secondary: '#8077D5',
  primary: '#393D47',
  background: '#e0e0e0',
  error: '#ff0033',
  info: '#687494',
  success: '#02CC3B',
  warning: '#E9D502',
  easy: '#0D65F2',
  amio: '#2f8fff',
  equiradar: '#aa1932',
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [], theme: {
    extend: {
      colors: COLOR_HEX_CODES,
      zIndex: {
        float: 999,
        drawer: 1000,
        notification: 3000,
      },
    },
  }, plugins: [],
};
