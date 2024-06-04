
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['@/index.css'],
  modules: [
    '@nuxtjs/google-fonts',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'
  ],
  googleFonts: {
    families: { Montserrat: [100,200,300,400,500,700,900],
    },
    display: 'swap'
  },
})