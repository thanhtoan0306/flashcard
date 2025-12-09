/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'chinese': ['Noto Sans SC', 'sans-serif'],
        'sans': ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
