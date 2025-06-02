/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#000000',
        },
        primary: '#27AE60',
        secondary: '#2D9CDB',
        accent: '#F2994A',
        background: '#F9F9F9',
        card: '#FFFFFF',
        text: '#333333',
        danger: '#EB5757',
        light: {
          50: '#ffffff',
          100: '#f8fafc',
          200: '#f1f5f9',
          300: '#e2e8f0',
          400: '#cbd5e1',
          500: '#94a3b8',
          600: '#64748b',
          700: '#475569',
          800: '#334155',
          900: '#1e293b',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        code: ['Source Code Pro', 'monospace'],
      },
      borderRadius: {
        card: '1rem',
        button: '0.75rem',
        input: '0.5rem',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(14, 165, 233, 0.3)',
        'soft': '0 2px 15px rgba(0, 0, 0, 0.1)',
        'hover': '0 4px 20px rgba(0, 0, 0, 0.15)',
        card: '0px 4px 12px rgba(0, 0, 0, 0.05)',
        input: '0px 2px 6px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-position': '0% 50%'
          },
          '50%': {
            'background-position': '100% 50%'
          },
        },
      },
      spacing: {
        sectionPadding: '2rem',
        cardGap: '1.5rem',
        inputPadding: '0.75rem',
      },
    },
  },
  plugins: [],
} 