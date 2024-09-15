export const COLOR_HEX_CODES = {
  primary: '#00BCD1',
  background: '#E8F3F1',
  error: '#cc0202',
  info: '#334B48',
  success: '#02CC3B',
  warning: '#A7F594',
  secondary: '#40E0D0',
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
      },
    },
  }, plugins: [],
};
