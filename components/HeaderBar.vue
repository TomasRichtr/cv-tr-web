<script setup lang="ts">
import cv from 'assets/files/t_richtr_cv.pdf';
import IconBtn from '~/components/IconBtn.vue';
import { Colors } from '~/enums/vuetify';
import { useUiStore } from '~/store/uiStore';
import { Routes } from '~/enums/routes';
import { STRINGS } from '~/constants/strings';

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
      v-if="route.name !== Routes.Index"
      icon="mdi-home"
      class="mr-2"
      :to="Routes.Index"
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
