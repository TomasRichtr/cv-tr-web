<script setup lang="ts">
import type { Variants, Colors } from '~/enums/vuetify.enums';
import { SIZES, COLORS, VARIANTS } from '~/enums/vuetify.enums';
import type { RoutesEnums } from '~/enums/routes.enums';

interface Props {
  icon: string;
  to?: RoutesEnums;
  href?: string;
  color?: Colors;
  variant?: Variants;
}

const props = withDefaults(defineProps<Props>(), {
  variant: VARIANTS.OUTLINED,
  color: COLORS.BACKGROUND,
  to: undefined,
  href: undefined,
});
</script>

<template>
  <VBtn
    :size="SIZES.SMALL"
    :icon="props.icon"
    :variant="props.variant"
    :color="props.color"
    class="icon-btn"
    :to="props.to && { name: props.to }"
    :href="props.href"
    :target="props.href ? '_blank' : null"
  >
    <VIcon
      :icon="props.icon"
      :size="SIZES.X_LARGE"
    />
  </VBtn>
</template>
