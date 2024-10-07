import { getCurrentInstance } from 'vue';
import type { createVuetify } from 'vuetify';

const vuetifyInstance = ref<ReturnType<typeof createVuetify>>();

export const useVuetify = () => {
  const { t } = useTranslations();

  const getVuetifyInstance = () => {
    const appInstance = getCurrentInstance();
    if (!appInstance) throw Error (t('errors.missingInstance'));
    return appInstance.appContext.config.globalProperties.$vuetify;
  };

  onMounted(() => {
    vuetifyInstance.value = getVuetifyInstance() as never as ReturnType<typeof createVuetify>;
  });

  return {
    vuetifyInstance,
  };
};
