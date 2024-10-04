// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['@/styles/main.scss'],
  modules: [
    'vuetify-nuxt-module',
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@pinia/nuxt',
    'dayjs-nuxt',
    'nuxt-lodash',
    '@vueuse/nuxt',
  ],
  vuetify: {
    moduleOptions: {
      styles: {
        configFile: './styles/settings.scss',
      },
    },
    vuetifyOptions: './vuetify.config.ts',
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
    },
  },
  pinia: {
    storesDirs: ['~/store/**'],
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
  nitro: {
    plugins: ['~/server/plugins/migrations.plugins.ts'],
  },
  runtimeConfig: {
    public: {
      emailLogin: '',
      emailPassword: '',
    },
  },
});
