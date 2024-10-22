<script setup lang="ts">
import { DEV_ICON_MAP, MATERIAL_ICON_MAP } from '~/constants/icons.constants';

interface Props {
  skill: string;
}

const props = defineProps<Props>();

const iconProps = computed(() => {
  const devIcon = DEV_ICON_MAP[props.skill as keyof typeof DEV_ICON_MAP] || props.skill.toLowerCase();
  const iconProps = { class: `devicon-${devIcon}-plain`, icon: '' };

  const iconMat = MATERIAL_ICON_MAP[props.skill as keyof typeof MATERIAL_ICON_MAP];
  if (iconMat) {
    iconProps.icon = `mdi-${iconMat}`;
  }
  return iconProps;
});
</script>

<template>
  <VIcon
    v-bind="iconProps"
  />
</template>
