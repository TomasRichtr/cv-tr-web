<script setup lang="ts">
import cv from 'assets/files/t_richtr_cv.pdf';
import { capitalize } from 'vue';
import { ROUTES } from '../../enums/routes.enums';
import { COLORS } from '../../enums/vuetify.enums';
import { useUiStore } from '../../store/ui.store';
import IconBtn from './IconBtn.vue';

const { showNavDrawer } = storeToRefs(useUiStore());

const downloadCV = () => {
  const link = document.createElement('a');
  link.href = cv;
  link.download = 't_richtr_cv.pdf';
  link.target = '_blank';
  link.click();
};

const route = useRoute();

const { t } = useTranslations();
</script>

<template>
  <VAppBar :color="COLORS.PRIMARY">
    <template #title>
      <span class="font-bold text-2xl">{{ `${t('name')} ${t('surname')}` }}</span>
    </template>

    <IconBtn
      v-if="route.name !== ROUTES.INDEX"
      icon="mdi-home"
      class="mr-2"
      :to="ROUTES.INDEX"
    />

    <IconBtn
      v-tooltip:bottom="capitalize(t('tooltip.downloadCV'))"
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
