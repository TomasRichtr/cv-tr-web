<script setup lang="ts">
import { FOOTER_BTNS_MAP } from '~/constants/ui.constants';
import { useUiStore } from '~/store/ui.store';
import { COLORS } from '~/enums/vuetify.enums';
import type { RoutesEnums } from '~/enums/routes.enums';
import { ROUTES_ENUMS } from '~/enums/routes.enums';

const route = useRoute();

const footerBtnsProps = computed(() => {
  return FOOTER_BTNS_MAP[route.name as RoutesEnums];
});

const { showNavDrawer } = storeToRefs(useUiStore());

const { t } = useTranslations();
</script>

<template>
  <VFooter
    v-if="!showNavDrawer"
    class="flex justify-between p-4 z-float w-full"
    :class="route.name === ROUTES_ENUMS.CONTACTS ? 'flex-row' : 'flex-row-reverse'"
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
