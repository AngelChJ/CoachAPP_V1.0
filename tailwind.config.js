/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gym-dark': '#101010',
        'gym-blue': '#4D6CFA',
        'gym-gray-light': '#2A2A2A',
      },
    },
  },
  plugins: [],
}