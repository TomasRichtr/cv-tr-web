<script setup lang="ts">
import type { VChip } from 'vuetify/components';
import { capitalize } from 'vue';
import { STRINGS } from '../../constants/strings.constants';
import { Colors, Density, Variants } from '~/enums/vuetify.enums';
import { SkillDegree } from '~/enums/skills.enum';
import { HEADER_LABELS, SORTING } from '~/constants/skills.constants';

interface Props {
  selectedSort: number;
}

const props = withDefaults(defineProps<Props>(), {
  selectedSort: 0,
});

interface Emits {
  (e: 'select-group', group: SkillDegree): void;
  (e: 'update:selected-sort', sort: number): void;
}

const emit = defineEmits<Emits>();

const tagColor = (degree: SkillDegree) => {
  return {
    [SkillDegree.FewTime]: Colors.Primary,
    [SkillDegree.Often]: Colors.Secondary,
    [SkillDegree.Daily]: Colors.Success,
  }[degree];
};
</script>

<template>
  <div class="flex gap-2 flex-wrap pl-1">
    <span class="capitalize font-medium">{{ STRINGS.selections }}:</span>
    <VChip
      v-for="(label, i) in HEADER_LABELS"
      :key="label"
      :variant="Variants.Outlined"
      :density="Density.Compact"
      :color="tagColor(i + 1)"
      class="cursor-pointer"
      @click="emit('select-group', i + 1)"
    >
      <span class="text-info">{{ capitalize(label) }}</span>
    </VChip>
  </div>

  <div class="flex gap-2 flex-wrap pl-1">
    <span class="capitalize font-medium">{{ STRINGS.sorting.title }}:</span>
    <VChip
      v-for="(label, i) in SORTING"
      :key="label"
      :variant="props.selectedSort === i ? Variants.Elevated : Variants.Outlined"
      :density="Density.Compact"
      :color="tagColor(i)"
      class="cursor-pointer"
      @click="emit('update:selected-sort', i)"
    >
      <span :class="props.selectedSort !== i ? 'text-info' : 'text-background'">
        {{ capitalize(label) }}
      </span>
    </VChip>
  </div>
</template>
