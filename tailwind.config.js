/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      animation: {
        'fade-in': 'fade-in 2s ease-in-out 0.1s forwards',
        'slide-in': 'slide-in 2s ease-in-out 0.1s forwards',
        'fall-in': 'fall-in 2s ease-in-out 0.1s forwards',
        'fade-up': 'fadeUp 1s ease-out'
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'slide-in':{
          from:{ left: '-100%'},
          to:{left: '0%'}
        },
        'fall-in':{
          from:{ top: '-100%'},
          to:{top: '0%'}
        },
        fadeUp: {
          from: {opacity: 0, transform: 'translateY(20px)'},
          to: {opacity: 1, transform: 'translateY(0)'},
        }
      },
      boxShadow: {
        md: '3px 3px 6px rgba(0, 0, 0, 0.5)',
        'custom-red': '0px 4px 10px rgba(255, 22, 22, 0.5)', // Define custom shadow
        'custom-white': '0px 4px 10px rgba(255, 255, 255, 0.5)', // Define custom shadow
      },
      colors:{
        "primary": "#FF1616",
        "secondary": "#00e600",
        "light-primary": "rgba(255, 22, 22, 0.2)",
        "light-secondary": "rgba(0, 230, 0, 0.2)",
        "background": "#1C1C1C",
        "white-text": "#fff",
        "black-text": "000"
      },
      backgroundImage: {
        'back-image': "url('/images/hero-img.jfif')", 
        'gradient-overlay': "linear-gradient(to right, rgba(0, 0, 0, 0.9), transparent), url('/images/hero-img.jfif')",
      },      
      width:{
        "img-width": "400px"
      },
    },
  },
  plugins: [],
}

