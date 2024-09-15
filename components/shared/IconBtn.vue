<script setup lang="ts">
import { Variants, Colors, Sizes } from '~/enums/vuetify.enums';
import type { RoutesEnums } from '~/enums/routes.enums';

interface Props {
  icon: string;
  to?: RoutesEnums;
  href?: string;
  color?: Colors;
  variant?: Variants;
}

const props = withDefaults(defineProps<Props>(), {
  variant: Variants.Outlined,
  color: Colors.Background,
  to: undefined,
  href: undefined,
});
</script>

<template>
  <VBtn
    :size="Sizes.Small"
    :icon="props.icon"
    :variant="Variants.Outlined"
    :color="props.color"
    class="icon-btn"
    :to="props.to && { name: props.to }"
    :href="props.href"
    :target="props.href ? '_blank' : null"
  >
    <VIcon
      :icon="props.icon"
      :size="Sizes.XLarge"
    />
  </VBtn>
</template>
