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
      fontFamily: {
        'main': ['"Source Code Pro"', 'monospace']
      },
      colors: {
        "primary": "#0f0f1c",
        "secondary": "#3f3f3f"
      },
      minHeight: {
        "body": "calc(100vh - 64px)"
      },
      height: {
        "hero": "calc(98vh - 64px)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
