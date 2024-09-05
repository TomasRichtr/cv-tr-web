<script setup lang="ts">
import { Colors, Density } from '~/enums/vuetify.enums';
import type { Skills } from '~/enums/skills.enum';
import { SkillDegree } from '~/enums/skills.enum';
import SkillTag from '~/components/shared/SkillTag.vue';
import { SKILLS_DEGREE } from '~/constants/skills.constants';

interface Props {
  isFirst: boolean;
  skill: Skills;

}

const props = withDefaults(defineProps<Props>(), {
  isFirst: false,
});

const iconColor = computed(() => {
  return {
    [SkillDegree.FewTime]: Colors.Info,
    [SkillDegree.Often]: Colors.Secondary,
    [SkillDegree.Daily]: Colors.Success,
  }[SKILLS_DEGREE[props.skill]];
});
</script>

<template>
  <li class="flex items-center justify-between">
    <SkillTag
      :color="Colors.Primary"
      :skill="props.skill"
      :external-link="`https://www.google.com/search?q=${props.skill}`"
    />
    <VRating
      :model-value="SKILLS_DEGREE[props.skill]"
      empty-icon="mdi-circle-outline"
      full-icon="mdi-circle"
      length="3"
      :disabled="true"
    >
      <template #item-label="{ label }">
        <span
          class="font-weight-black text-caption"
        >
          {{ label }}
        </span>
      </template>
      <template #item="{ icon }">
        <VIcon
          :color="iconColor"
          :icon="icon"
          class="px-9 cursor-default"
        />
      </template>
    </VRating>
  </li>
</template>

<style scoped lang="scss">

</style>
