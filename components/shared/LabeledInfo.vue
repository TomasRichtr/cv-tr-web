<script setup lang="ts">
import isNil from 'lodash-es/isNil';

interface Props {
  label: string;
  info: string | null;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="flex flex-col">
    <span class="text-sm font-semibold">{{ props.label }}</span>
    <span
      v-if="!isNil(props.label)"
      class="text-xl"
    >{{ props.info }}</span>
  </div>
</template>
