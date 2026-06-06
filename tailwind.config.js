/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Madera y Verde — ClickHouse UY
        crema: {
          50:  '#FDFBF7',
          100: '#F9F4EC',
          200: '#F0E8D5',
          300: '#E5D4B8',
          400: '#D4B896',
        },
        madera: {
          300: '#C4956A',
          400: '#A67C52',
          500: '#8B6340',
          600: '#6B4C30',
          700: '#4A3220',
        },
        verde: {
          100: '#E8F0E5',
          200: '#C5D9BC',
          300: '#8FB882',
          400: '#5C8F52',
          500: '#3A6B31',
          600: '#2C5224',
          700: '#1E3A18',
          800: '#122410',
        },
        carbon: {
          800: '#1C1C1A',
          900: '#0F0F0D',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      backdropBlur: {
        glass: '20px',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'zoom-slow': 'zoomSlow 8s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        zoomSlow: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
      },
      aspectRatio: {
        '3/2': '3 / 2',
      },
    },
  },
  plugins: [],
}
