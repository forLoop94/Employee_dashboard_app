/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pitch: "#ffd2c1",
        lilac: "#eec1fa",
        blue: "#2697ff"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
}

