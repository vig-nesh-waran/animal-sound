/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-green': '#DFF2BF',
        'green-600': '#4CAF50',
        'green-900': '#1B5E20',
      },
    },
  },
  plugins: [],
}

