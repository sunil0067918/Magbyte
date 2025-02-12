/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // 'hero-pattern': "url('./src/images/Group images/Group15.png')", // Custom background image
        'footer-texture': "url('/images/footer-texture.png')", // Another custom image
      },

      boxShadow: {
        "text-sm": "1px 1px 2px rgba(0, 0, 0, 0.1)",
        "text-md": "2px 2px 4px rgba(0, 0, 0, 0.2)",
        "text-lg": "3px 3px 6px rgba(0, 0, 0, 0.3)",
        "text-xl": "4px 4px 8px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
