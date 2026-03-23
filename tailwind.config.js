/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        navy: {
          950: '#04060f',
          900: '#060818',
          800: '#0a0e20',
          700: '#0f1530',
        },
        ember: {
          400: '#ff8c42',
          500: '#ff6b1a',
          600: '#e84c0a',
        },
        crimson: {
          500: '#dc2626',
          600: '#b91c1c',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 107, 26, 0.3)' },
          '50%': { boxShadow: '0 0 60px rgba(255, 107, 26, 0.6)' },
        },
      },
      backgroundImage: {
        'gradient-ember': 'linear-gradient(135deg, #ff8c42, #dc2626)',
        'gradient-dark': 'linear-gradient(180deg, #04060f 0%, #060818 50%, #0a0e20 100%)',
      }
    },
  },
  plugins: [],
}
