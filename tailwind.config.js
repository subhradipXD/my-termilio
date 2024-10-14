/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#000000',
        'dark-text': '#00ff00',
        'light-bg': '#ffffff',
        'light-text': '#000000',
        'green-goblin-bg': '#1a1a1a',
        'green-goblin-text': '#4caf50',
        'ubuntu-bg': '#300a24',
        'ubuntu-text': '#dd4814',
      },
      fontFamily: {
        'vt323': ['VT323', 'monospace'],  // Add VT323 font
      },
    },
  },
  plugins: [],
}
