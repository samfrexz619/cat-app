/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg_main: '#F8F8F7',
        purple_bg: '#B4B7FF',
        vb: 'rgba(255, 255, 255, 0.60)',
        green_bg: '#97EAB9',
        yellow_bg: '#FFD280',
        pry: '#FF868E',
        txt_black: '#1D1D1D',
        grey_10: '#8C8C8C',
        pry_hov: '#FBE0DC'
      },
      fontFamily: {
        jost: ['Jost, sans-serif']
      },
      borderRadius: {
        20: '20px',
        10: '10px',
      },
      spacing: {
        13: '138px',
        19: '198px'
      },
      fontSize: {
        44: '44px',
        20: '20px',
      }
    },
  },
  plugins: [],
}

