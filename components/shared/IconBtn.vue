<script setup lang="ts">
import type { Routes } from '../../enums/routes';
import type { BtnVariants, Colors } from '../../enums/vuetify.enums';
import { BTN_VARIANTS, COLORS, SIZES } from '../../enums/vuetify.enums';
import { useUiStore } from '../../store/ui.store';

interface Props {
  icon: string;
  to?: Routes;
  href?: string;
  color?: Colors;
  variant?: BtnVariants;
}

const props = withDefaults(defineProps<Props>(), {
  variant: BTN_VARIANTS.OUTLINED,
  color: COLORS.BACKGROUND,
  to: undefined,
  href: undefined,
});

const { language } = storeToRefs(useUiStore());
</script>

<template>
  <VBtn
    :size="SIZES.SMALL"
    :icon="props.icon"
    :variant="props.variant"
    :color="props.color"
    class="icon-btn"
    :to="props.to && { name: props.to, params: { lang: language } }"
    :href="props.href"
    :target="props.href ? '_blank' : null"
  >
    <VIcon
      :icon="props.icon"
      :size="SIZES.X_LARGE"
    />
  </VBtn>
</template>
