<script setup lang="ts">
import { FOOTER_BTNS_MAP } from '~/constants/footer.constants';
import { useUiStore } from '~/store/ui.store';
import { COLORS } from '~/enums/vuetify.enums';
import type { Routes } from '~/enums/routes';
import { ROUTES } from '~/enums/routes';

const route = useRoute();

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
        :to="{ name: btn.to }"
        :variant="btn.variant"
      />
    </template>
  </VFooter>
</template>
