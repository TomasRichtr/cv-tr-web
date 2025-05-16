export default defineNuxtConfig({
  modules: [
    'vuetify-nuxt-module',
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@pinia/nuxt',
    'dayjs-nuxt',
    'nuxt-lodash',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
  ],
  devtools: { enabled: true },
  app: {
    pageTransition: {
      name: 'slide-x-transition',
    },
  },
  css: ['@/styles/main.scss'],
  build: {
    transpile: ['vuetify'],
  },
  sourcemap: {
    server: false,
    client: false,
  },
  compatibilityDate: '2024-04-03',
  eslint: {
    config: {
      stylistic: {
        semi: true,
      },
    },
  },
  i18n: {
    locales: ['en', 'cs'],
    defaultLocale: 'en',
    strategy: 'prefix',
  },
  pinia: {
    storesDirs: ['./store/**'],
  },
  vuetify: {
    moduleOptions: {
      styles: {
        configFile: './styles/settings.scss',
      },
    },
    vuetifyOptions: './vuetify.config.ts',
  },
});
