export default defineNuxtConfig({
  ssr: false,

  typescript: {
    shim: false,
    strict: true,
  },

  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
  ],

  runtimeConfig: {
    apiSecret: '', // can be overridden by NUXT_API_SECRET environment variable
    public: {
      apiBase: '', // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    },
  },

  modules: [
    '@vueuse/nuxt',
    'nuxt-vuefire',
  ],

  build: {
    transpile: ['vuetify'],
  },

  vuefire: {
    auth: true,
    config: {
      apiKey: process.env.NUXT_PUBLIC_VUEFIRE_API_KEY,
      authDomain: process.env.NUXT_PUBLIC_VUEFIRE_AUTH_DOMAIN,
      projectId: process.env.NUXT_PUBLIC_VUEFIRE_PROJECT_ID,
    },
  },
});
