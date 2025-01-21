/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        aqua: {
          DEFAULT: '#00FFFF',
          light: '#33FFFF',
          dark: '#00CCCC',
        },
        teal: {
          DEFAULT: '#244D61',
          light: '#2E6075',
          dark: '#1A3A4A',
        },
        primary: {
          DEFAULT: '#5B21B6', // Royal Purple
          light: '#7C3AED', // Lighter purple
          dark: '#4C1D95', // Darker purple
        }
      }
    },
  },
  plugins: [],
}; 