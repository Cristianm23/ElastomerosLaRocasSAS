/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: 'var(--color-brand-blue)',
          white: 'var(--color-brand-white)',
          ink: 'var(--color-brand-ink)',
          red: 'var(--color-brand-red)',
        },
      },
    },
  },
  plugins: [],
};
