<script setup lang="ts">
import { SKILLS_DEGREE } from '../../constants/skills.constants';
import { COLORS } from '../../enums/vuetify.enums';
import type { Skills } from '../../enums/skills.enum';
import { SKILL_DEGREE } from '../../enums/skills.enum';
import SkillTag from '../shared/SkillTag.vue';

interface Props {
  isFirst: boolean;
  skill: Skills;

}

const props = withDefaults(defineProps<Props>(), {
  isFirst: false,
});

const iconColor = computed(() => {
  return {
    [SKILL_DEGREE.FEW_TIME]: COLORS.INFO,
    [SKILL_DEGREE.OFTEN]: COLORS.SECONDARY,
    [SKILL_DEGREE.DAILY]: COLORS.SUCCESS,
  }[SKILLS_DEGREE[props.skill]];
});
</script>

<template>
  <li class="flex items-center justify-between">
    <SkillTag
      :color="COLORS.PRIMARY"
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
        <div class="w-[56px] md:w-[72px] flex justify-center items-center">
          <VIcon
            :color="iconColor"
            :icon="icon"
            class="cursor-default"
          />
        </div>
      </template>
    </VRating>
  </li>
</template>
