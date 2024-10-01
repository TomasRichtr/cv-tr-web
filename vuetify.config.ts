import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration';
import { COLOR_HEX_CODES } from './tailwind.config';

export default defineVuetifyConfiguration({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: COLOR_HEX_CODES,
      },
    },
  },
});
