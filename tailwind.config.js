module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary": "#1f1f1f",
        "secondary": "#3f3f3f"
      },
      minHeight: {
        "body": "calc(100vh - 64px)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
