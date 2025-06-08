/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a',
        darkBg: '#0f172a',
      },
    },
  },
  plugins: [],
}
