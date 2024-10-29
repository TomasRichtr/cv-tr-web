// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'vuetify-nuxt-module',
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@pinia/nuxt',
    'dayjs-nuxt',
    'nuxt-lodash',
    '@vueuse/nuxt',
  ],
  devtools: { enabled: true },
  app: {
    pageTransition: {
      name: 'slide-x-transition',
    },
  },
  css: ['@/styles/main.scss'],
  alias: {
    pinia: '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs',
  },
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
