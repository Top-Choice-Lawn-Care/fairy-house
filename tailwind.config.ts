import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        title: ['Pacifico', 'cursive'],
        body: ['Nunito', 'sans-serif'],
      },
      colors: {
        fairy: { pink: '#f9a8d4', purple: '#c084fc', teal: '#5eead4', yellow: '#fde68a', green: '#86efac', blue: '#93c5fd' },
        night: { sky: '#0f172a', mid: '#1e1b4b', grass: '#14532d' },
        day: { sky: '#bfdbfe', mid: '#ede9fe', grass: '#86efac' },
      },
      keyframes: {
        'fairy-float': { '0%,100%': { transform: 'translateY(0) rotate(-5deg)', opacity: '0.9' }, '50%': { transform: 'translateY(-18px) rotate(5deg)', opacity: '1' } },
        'fairy-in': { '0%': { opacity: '0', transform: 'scale(0.3) translateY(30px)' }, '60%': { transform: 'scale(1.15) translateY(-5px)' }, '100%': { opacity: '1', transform: 'scale(1) translateY(0)' } },
        'creature-in': { '0%': { opacity: '0', transform: 'translateX(60px) scale(0.5)' }, '70%': { transform: 'translateX(-8px) scale(1.05)' }, '100%': { opacity: '1', transform: 'translateX(0) scale(1)' } },
        sparkle: { '0%,100%': { opacity: '1', transform: 'scale(1)' }, '50%': { opacity: '0.3', transform: 'scale(0.5)' } },
        'glow-pulse': { '0%,100%': { boxShadow: '0 0 8px 2px rgba(249,168,212,0.5)' }, '50%': { boxShadow: '0 0 20px 6px rgba(192,132,252,0.7)' } },
        'slide-up': { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        'firefly': { '0%,100%': { opacity: '0.2', transform: 'translate(0,0)' }, '25%': { opacity: '1', transform: 'translate(8px,-12px)' }, '50%': { opacity: '0.4', transform: 'translate(16px,4px)' }, '75%': { opacity: '0.9', transform: 'translate(4px,-8px)' } },
        'rainbow': { '0%': { backgroundPosition: '0% 50%' }, '100%': { backgroundPosition: '100% 50%' } },
      },
      animation: {
        'fairy-float': 'fairy-float 3s ease-in-out infinite',
        'fairy-float-slow': 'fairy-float 4.5s ease-in-out infinite',
        'fairy-float-fast': 'fairy-float 2.2s ease-in-out infinite',
        'fairy-in': 'fairy-in 0.7s ease-out forwards',
        'creature-in': 'creature-in 0.8s cubic-bezier(0.34,1.56,0.64,1) forwards',
        sparkle: 'sparkle 1.5s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.4s ease-out forwards',
        firefly: 'firefly 3s ease-in-out infinite',
        rainbow: 'rainbow 3s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config
