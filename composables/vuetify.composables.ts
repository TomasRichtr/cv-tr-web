import { getCurrentInstance } from 'vue';
import type { createVuetify } from 'vuetify';
import { STRINGS } from '~/constants/translations.constants';

const vuetifyInstance = ref<ReturnType<typeof createVuetify>>();

export const useVuetify = () => {
  const getVuetifyInstance = () => {
    const appInstance = getCurrentInstance();
    if (!appInstance) throw Error (STRINGS.errors.missingInstance);
    return appInstance.appContext.config.globalProperties.$vuetify;
  };

  onMounted(() => {
    vuetifyInstance.value = getVuetifyInstance() as never as ReturnType<typeof createVuetify>;
  });

  return {
    vuetifyInstance,
  };
};
