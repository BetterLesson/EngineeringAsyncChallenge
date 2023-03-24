/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      tablet: '600px',
      laptop: '900px',
    },
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/images/hero.png')",
        'mailing-list': "url('/src/assets/images/mailinglist.png')",
      },
    },
  },
  plugins: [],
};
