/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(265.79deg, rgba(199, 96, 182, 0.3) 34.71%, rgba(35, 45, 196, 0.3) 97.46%)',
      },
      colors: {
        'pink-custom': '#C760B6',
        'blue-custom': '#232DC4',
      },
    },
  },
  plugins: [],
}

