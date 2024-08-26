<script setup lang="ts">
import { BtnsVariants, Colors, Sizes } from '~/enums/vuetify.enums';
import type { RoutesEnums } from '~/enums/routes.enums';

interface Props {
  icon: string;
  to?: RoutesEnums;
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
