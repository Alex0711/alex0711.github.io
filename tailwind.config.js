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
        white: 'var(--color-white)',
        secondary: 'var(--color-secondary)',
        details: 'var(--color-details)',
        tertiary: 'var(--color-tertiary)',
        quaternary: 'var(--color-quaternary)',
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      }
    },
  },
  plugins: [],
}
