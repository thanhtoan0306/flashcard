/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
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
