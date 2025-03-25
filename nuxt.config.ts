export default defineNuxtConfig({
  ssr: false,
  
  devtools: { enabled: true },
  
  app: {
    baseURL: '/tailwindcss.size.calculator/'
  },

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint'
  ],

  css: ['~/assets/css/main.css'],

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-11-27',
  
  nitro: {
    output: {
      dir: '.output',
      serverDir: '.output/server',
      publicDir: 'docs'
    }
  }
})