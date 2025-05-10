/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        background: 'var(--color-background)',
        text: 'var(--color-text)',
        accent: 'var(--color-accent)',
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
      fontSize: {
        'title': '2.25rem',
        'slogan': '4rem',
        'subtitle': '1.5rem',
        'body': '1rem',
      }
    },
  },
  plugins: [],
}

