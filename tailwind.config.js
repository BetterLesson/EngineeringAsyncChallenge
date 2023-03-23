/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/src/assets/images/hero.png')",
        'table-image': "url('/src/assets/images/coaching.png')",
      },
    },
  },
  plugins: [],
};
