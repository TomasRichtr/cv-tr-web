<script setup lang="ts">
import type { Routes } from '../../enums/routes.enums';
import { ROUTES } from '../../enums/routes.enums';
import { FOOTER_BTNS_MAP } from '../../constants/footer.constants';
import { COLORS } from '../../enums/vuetify.enums';
import { useUiStore } from '../../store/ui.store';

const route = useRoute();
const { language } = storeToRefs(useUiStore());

const footerBtnsProps = computed(() => {
  return FOOTER_BTNS_MAP[route.name as Routes];
});

const { showNavDrawer } = storeToRefs(useUiStore());

const { t } = useTranslations();
</script>

<template>
  <VFooter
    v-if="!showNavDrawer"
    class="flex justify-between z-float w-full h-12"
    :class="route.name === ROUTES.CONTACTS ? 'flex-row' : 'flex-row-reverse'"
    :app="true"
    :color="COLORS.PRIMARY"
  >
    <template v-for="btn in footerBtnsProps">
      <VBtn
        v-if="btn.label"
        :key="t(btn.label)"
        :rounded="true"
        :text="t(btn.label)"
        :color="btn.color"
        :to="{ name: btn.to, params: { lang: language } }"
        :variant="btn.variant"
      />
    </template>
  </VFooter>
</template>
