<script setup lang="ts">
import { flow, replace } from 'lodash-es';
import type { Routes } from '../../enums/routes.enums';
import { ROUTE_SUFFIXES, ROUTES } from '../../enums/routes.enums';
import { FOOTER_BTNS_MAP } from '../../constants/footer.constants';
import { COLORS } from '../../enums/vuetify.enums';
import { useUiStore } from '../../store/ui.store';

const route = useRoute();

const footerBtnsProps = computed(() => {
  const sanitizedRoute = flow(
    str => replace(str, ROUTE_SUFFIXES.EN, ''),
    str => replace(str, ROUTE_SUFFIXES.CS, ''),
  )(route.name as string);

  return FOOTER_BTNS_MAP[sanitizedRoute as Routes];
});

const { showNavDrawer } = storeToRefs(useUiStore());

const { t, localePath } = useTranslations();
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
        :to="localePath({ name: btn.to })"
        :variant="btn.variant"
      />
    </template>
  </VFooter>
</template>
