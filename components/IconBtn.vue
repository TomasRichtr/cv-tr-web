<script setup lang="ts">
import { BtnsVariants, Colors, Sizes } from '~/enums/vuetify';
import type { Routes } from '~/enums/routes';

interface Props {
  icon: string;
  to?: Routes;
}

const props = defineProps<Props>();
</script>

<template>
  <VBtn
    :size="Sizes.Small"
    :icon="props.icon"
    :variant="BtnsVariants.Outlined"
    :color="Colors.Background"
    class="icon-btn"
    :to="{ name: props.to }"
  >
    <VIcon
      :icon="props.icon"
      :size="Sizes.XLarge"
    />
  </VBtn>
</template>
