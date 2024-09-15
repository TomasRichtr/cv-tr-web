<script setup lang="ts">
import { capitalize } from 'vue';
import { STRINGS } from '~/constants/strings.constants';
import { HEADER_LABELS } from '~/constants/skills.constants';
</script>

<template>
  <div class="flex items-center justify-between">
    <span>
      {{ capitalize(STRINGS.skillsDegree.definition) }}
    </span>
    <span class="flex justify-end text-center">
      <span
        v-for="label in HEADER_LABELS"
        :key="label"
        class="w-[56px] md:w-[72px] cursor-pointer"
      >
        {{ capitalize(label) }}
      </span>

    </span>
  </div>
</template>

<style scoped lang="scss">

</style>
