// ABOUTME: Tailwind CSS configuration for the Hitchens Eleventy theme
// ABOUTME: Configures content paths for purging unused styles and theme customization
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_includes/**/*.njk",
    "./_layouts/**/*.njk",
    "./index.html",
    "./_posts/**/*.md"
  ],
  theme: {
    extend: {
      fontFamily: {
        'garamond': ['EB Garamond', 'serif'],
      },
    },
  },
  plugins: [],
}
