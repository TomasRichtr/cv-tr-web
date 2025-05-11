<script setup lang="ts">
import { useUiStore } from '../store/ui.store';

const { language } = storeToRefs(useUiStore());

onMounted(() => {
  navigateTo(`/${language.value}`);
});
</script>

<template>
  <div>
    <p>Redirecting...</p>
  </div>
</template>
