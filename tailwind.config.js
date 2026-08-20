/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0A0E14',
          900: '#0F1420',
          800: '#161B26',
          700: '#1E2532',
        },
        accent: {
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
        },
        paper: {
          50: '#FAFAFA',
          100: '#F4F5F7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [],
};