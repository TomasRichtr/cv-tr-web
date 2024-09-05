<script setup lang="ts">
import cv from 'assets/files/t_richtr_cv.pdf';
import IconBtn from '~/components/shared/IconBtn.vue';
import { Colors } from '~/enums/vuetify.enums';
import { useUiStore } from '~/store/ui.store';
import { RoutesEnums } from '~/enums/routes.enums';
import { STRINGS } from '~/constants/strings.constants';

const { showNavDrawer } = storeToRefs(useUiStore());

const downloadCV = () => {
  const link = document.createElement('a');
  link.href = cv;
  link.download = 't_richtr_cv.pdf';
  link.target = '_blank';
  link.click();
};

const route = useRoute();
</script>

<template>
  <VAppBar :color="Colors.Primary">
    <template #title>
      <span class="font-bold text-2xl">{{ `${STRINGS.name} ${STRINGS.surname}` }}</span>
    </template>

    <IconBtn
      v-if="route.name !== RoutesEnums.Index"
      icon="mdi-home"
      class="mr-2"
      :to="RoutesEnums.Index"
    />

    <IconBtn
      icon="mdi-download"
      class="mr-2"
      @click="downloadCV"
    />

    <template #append>
      <IconBtn
        icon="mdi-menu"
        @click="showNavDrawer = !showNavDrawer"
      />
    </template>
  </VAppBar>
</template>

<style lang="scss">
.v-toolbar-title__placeholder {
  @apply text-background text-2xl;
}
</style>
