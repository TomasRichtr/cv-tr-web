<script setup lang="ts">
import { FOOTER_BTNS_MAP } from '~/constants/ui.constants';
import { RoutesEnums } from '~/enums/routes.enums';
import { useUiStore } from '~/store/ui.store.';

const route = useRoute();

const footerBtnsProps = computed(() => {
  return FOOTER_BTNS_MAP[route.name as RoutesEnums];
});

const { showNavDrawer } = storeToRefs(useUiStore());
</script>

<template>
  <div
    v-if="!showNavDrawer"
    class="flex justify-between p-4 z-float fixed bottom-0 right-0 w-full"
    :class="route.name === RoutesEnums.Contact ? 'flex-row' : 'flex-row-reverse'"
  >
    <template v-for="btn in footerBtnsProps">
      <VBtn
        v-if="btn.label"
        :key="btn.label"
        :rounded="true"
        :text="btn.label"
        :color="btn.color"
        :to="{ name: btn.to }"
        :variant="btn.variant"
      />
    </template>
  </div>
</template>
