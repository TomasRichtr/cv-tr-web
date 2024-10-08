<script setup lang="ts">
import { capitalize } from 'vue';

interface Props {
  title: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="flex flex-col px-4 py-5 border-2 border-secondary relative">
    <span class="absolute -top-3 left-2 bg-background px-1 text-secondary font-semibold">
      {{ capitalize(props.title) }}
    </span>
    <slot />
  </div>
</template>
