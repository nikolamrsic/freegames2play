module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/Imgs/hero.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }

    },
  },
  plugins: [],
}