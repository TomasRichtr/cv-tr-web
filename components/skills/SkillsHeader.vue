<script setup lang="ts">
import { HEADER_LABELS } from '../../constants/skills.constants';

const { t } = useTranslations();
</script>

<template>
  <div class="flex items-center justify-between">
    <span>
      {{ t('skillsDegree.definition') }}
    </span>
    <span class="flex justify-end text-center">
      <span
        v-for="label in HEADER_LABELS"
        :key="label"
        class="w-[56px] md:w-[72px] cursor-pointer"
      >
        {{ t(label) }}
      </span>

    </span>
  </div>
</template>
