/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      keyframes: {
        StickyHeader: {
          '0%': {
            transform: 'translateY(-60px)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        SlideCartWindow: {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(0%)',
          },
        },
        SlideSearchWindow: {
          '0%': {
            transform: 'translateY(100%)',
          },
          '100%': {
            transform: 'translateY(0%)',
          },
        },
      },
      animation: {
        stickyHeader : 'StickyHeader 0.3s ease forwards',
        slideCart: 'SlideCartWindow 0.4s ease forwards',
        slideSearch: 'SlideSearchWindow 0.5s ease forwards',
      }
    },
  },
  plugins: [],
}