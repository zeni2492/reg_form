/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6172F3',
        secondary:'#8098F9',
        text:'#E0EAFF',
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      borderRadius: {
        'xlg': '10px',
      },
      padding: {
        base:'10px'
      },
      margin: {
        base:'10px',
        giant: '133px'
      }
      
    },
  },
  plugins: [],
}