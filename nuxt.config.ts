// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['@/assets/main.css'],
  modules: [
    'vuetify-nuxt-module',
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@pinia/nuxt',
    'dayjs-nuxt',
  ],
  vuetify: {
    moduleOptions: {
      styles: {
        configFile: './styles/settings.scss',
      },
    },
    vuetifyOptions: './vuetify.config.ts', // <== you can omit it
  },
  eslint: {
    config: {
      stylistic: {
        semi: true,
      },
    },
  },
  app: {
    pageTransition: {
      name: 'slide-x-transition',
      mode: 'out-in', // default
    },
    layoutTransition: {
      name: 'slide',
      mode: 'out-in', // default
    },
  },
  pinia: {
    storesDirs: ['@/store/**'],
  },
  alias: {
    pinia: '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs',
  },
  sourcemap: {
    server: false,
    client: false,
  },
  build: {
    transpile: ['vuetify'],
  },
});
