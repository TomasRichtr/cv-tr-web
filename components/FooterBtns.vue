<script setup lang="ts">
import { FOOTER_BTNS_MAP } from '~/constants/footerBtns';
import { Routes } from '~/enums/routes';
import { useUiStore } from '~/store/uiStore';

const route = useRoute();

const footerBtnsProps = computed(() => {
  return FOOTER_BTNS_MAP[route.name as Routes];
});

const { showNavDrawer } = storeToRefs(useUiStore());
</script>

<template>
  <div
    v-if="!showNavDrawer"
    class="flex justify-between p-4 z-float fixed bottom-0 right-0 w-full"
    :class="route.name === Routes.Contact ? 'flex-row' : 'flex-row-reverse'"
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
