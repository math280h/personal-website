import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  // Add entry css file
  css: ['tailwindcss/tailwind.css'],
  build: {
    postcss: {
      // add Postcss options
      postcssOptions: require('./postcss.config.js'),
    },
  },
})