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
  runtimeConfig: {
    public: {
      emailLogin: process.env.NUXT_PUBLIC_EMAIL_LOGIN,
      emailPassword: process.env.NUXT_PUBLIC_EMAIL_PASSWORD,
      database_host: process.env.NUXT_PUBLIC_DATABASE_HOST,
      database_user: process.env.NUXT_PUBLIC_DATABASE_USER,
      database_password: process.env.NUXT_PUBLIC_DATABASE_PASSWORD,
      database: process.env.NUXT_PUBLIC_DATABASE,
      database_port: process.env.NUXT_PUBLIC_DATABASE_PORT,
      admin_name: process.env.NUXT_PUBLIC_ADMIN_NAME,
      admin_password: process.env.NUXT_PUBLIC_ADMIN_PASSWORD,
    },
  },
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
  nitro: {
    plugins: [
      '~/server/plugins/migrations.plugins.ts',
    ],
  },
  eslint: {
    config: {
      stylistic: {
        semi: true,
      },
    },
  },
  pinia: {
    storesDirs: ['~/store/**'],
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
