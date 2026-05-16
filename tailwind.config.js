/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange:    '#FF9933',
          'orange-d':'#e67c00',
          navy:      '#0A0F2C',
          'navy-l':  '#1A237E',
          teal:      '#00695C',
          green:     '#00C853',
        },
        surface: {
          dark:  '#060a18',
          card:  '#FAFBFE',
          muted: '#F3F5FA',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.65rem', { lineHeight: '1rem' }],
      },
      boxShadow: {
        'card':       '0 2px 20px 0 rgba(0,0,0,0.05)',
        'card-hover': '0 12px 40px 0 rgba(0,0,0,0.10)',
        'orange':     '0 8px 30px 0 rgba(255,153,51,0.30)',
        'orange-lg':  '0 12px 40px 0 rgba(255,153,51,0.35)',
        'navy':       '0 8px 24px 0 rgba(26,35,126,0.25)',
        'premium':    '0 20px 60px -12px rgba(0,0,0,0.15)',
        'premium-lg': '0 32px 80px -16px rgba(0,0,0,0.18)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      animation: {
        'fade-in':    'fadeIn 0.5s ease both',
        'fade-up':    'fadeUp 0.6s ease both',
        'float':      'float 6s ease-in-out infinite',
        'marquee':    'marquee 52s linear infinite',
        'spin-slow':  'spin 8s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
      },
      keyframes: {
        fadeIn:  { from: { opacity: '0' }, to: { opacity: '1' } },
        fadeUp:  { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        float:   { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-16px)' } },
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
};
