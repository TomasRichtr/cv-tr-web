<script setup lang="ts">
import { FOOTER_BTNS_MAP } from '~/constants/ui.constants';
import { RoutesEnums } from '~/enums/routes.enums';
import { useUiStore } from '~/store/ui.store';
import { Colors } from '~/enums/vuetify.enums';

const route = useRoute();

const footerBtnsProps = computed(() => {
  return FOOTER_BTNS_MAP[route.name as RoutesEnums];
});

const { showNavDrawer } = storeToRefs(useUiStore());
</script>

<template>
  <VFooter
    v-if="!showNavDrawer"
    class="flex justify-between p-4 z-float w-full"
    :class="route.name === RoutesEnums.Contacts ? 'flex-row' : 'flex-row-reverse'"
    :app="true"
    :color="Colors.Primary"
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
  </VFooter>
</template>
