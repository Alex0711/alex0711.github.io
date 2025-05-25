/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        details: 'var(--color-details)',
        text: 'var(--color-text)',
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      }
    },
  },
  plugins: [],
}
