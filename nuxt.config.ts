import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  css: ['tailwindcss/tailwind.css'],
  build: {
    postcss: {
      // add Postcss options
      postcssOptions: require('./postcss.config.js'),
    },
  },
  serverMiddleware: [
    {  handler: '~/middleware/security.ts' },
  ]
})
