/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"DM Serif Display"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        bg: '#F7F5F0',
        surface: '#FFFFFF',
        ink: '#1A1A1A',
        muted: '#6B6B6B',
        accent: '#1A3E6E',
        'accent-light': '#E8EFF8',
        border: '#E2DDD6',
        'tag-bg': '#EEF2F8',
        'tag-text': '#1A3E6E',
      },
    },
  },
  plugins: [],
}
