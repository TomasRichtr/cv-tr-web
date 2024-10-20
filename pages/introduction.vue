<script setup lang="ts">
import { capitalize } from 'vue';

const { t } = useTranslations();
</script>

<template>
  <VCard>
    <template #title>
      {{ capitalize(t('btnLabels.introduction')) }}
    </template>
    <template #text>
      <span
        class="text-justify"
        v-html="capitalize(t('introduction'))"
      />
    </template>
  </VCard>
</template>
