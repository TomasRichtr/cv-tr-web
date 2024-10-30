<script setup lang="ts">
import { isEmpty, uniq, values } from 'lodash-es';
import { BTN_VARIANTS, COLORS, DENSITY } from '../../enums/vuetify.enums';
import type { Skills } from '../../enums/skills.enum';
import { SKILL_DEGREE } from '../../enums/skills.enum';
import { HEADER_LABELS, SKILLS_DEGREE, SORTING_LABELS } from '../../constants/skills.constants';
import PageSection from '../shared/PageSection.vue';

interface Props {
  selectedSort?: number;
  selectedSkills?: Skills[];
}

const props = withDefaults(defineProps<Props>(), {
  selectedSort: 0,
  selectedSkills: () => [],
});

interface Emits {
  (e: 'update:selected-degrees', degree: number[]): void;
  (e: 'update:selected-sort', sort: number): void;
}

const emit = defineEmits<Emits>();

const { t } = useTranslations();

const tagColor = (degree: number) => {
  return {
    [SKILL_DEGREE.FEW_TIME]: COLORS.PRIMARY,
    [SKILL_DEGREE.OFTEN]: COLORS.SECONDARY,
    [SKILL_DEGREE.DAILY]: COLORS.SUCCESS,
  }[degree];
};

const selectedDegrees = ref<number[]>([]);

const selectDegree = (degreeUpdate: number) => {
  if (degreeUpdate === 0) {
    selectedDegrees.value = [0];
  }
  else if (selectedDegrees.value.includes(degreeUpdate)) {
    selectedDegrees.value = selectedDegrees.value.filter(degree => degree !== degreeUpdate);
  }
  else {
    selectedDegrees.value.push(degreeUpdate);
  }

  emit('update:selected-degrees', selectedDegrees.value);
};

const route = useRoute();

const setInitSelectedDegrees = () => {
  const initSelectedSkills = (route.query.skills || []) as Skills[];
  const skillDegrees = initSelectedSkills.map((skill: Skills) => {
    return SKILLS_DEGREE[skill];
  });
  selectedDegrees.value = uniq(skillDegrees);
};

onBeforeMount(() => {
  setInitSelectedDegrees();
});

const isDegreeChipSelected = (degreeUpdate: number) => {
  if (degreeUpdate === 0 && isEmpty(props.selectedSkills)) return BTN_VARIANTS.ELEVATED;
  const isDegreeUpdateSelected = selectedDegrees.value.includes(degreeUpdate);
  const allSkillDegreesCount = values(SKILLS_DEGREE).filter(degree => degree === degreeUpdate).length;
  const selectedSkillDegreesCount = props.selectedSkills.filter(skill => SKILLS_DEGREE[skill] === degreeUpdate).length;
  return isDegreeUpdateSelected && allSkillDegreesCount === selectedSkillDegreesCount
    ? BTN_VARIANTS.ELEVATED
    : BTN_VARIANTS.OUTLINED;
};
</script>

<template>
  <div class="flex flex-row gap-x-3">
    <PageSection
      class="flex flex-row flex-wrap gap-2 items-center"
      :title="t('pageSections.filters')"
    >
      <VChip
        v-for="(label, i) in [t('labels.all'), ...HEADER_LABELS.map(key => t(key, true))]"
        :key="label"
        :variant="isDegreeChipSelected(i)"
        :density="DENSITY.COMPACT"
        :color="tagColor(i)"
        class="cursor-pointer"
        :text="label"
        @click="selectDegree(i)"
      />
    </PageSection>

    <PageSection
      class="flex flex-row flex-wrap gap-2 items-center"
      :title="t('pageSections.sorters')"
    >
      <VChip
        v-for="(label, i) in SORTING_LABELS"
        :key="label"
        :variant="props.selectedSort === i ? BTN_VARIANTS.ELEVATED : BTN_VARIANTS.OUTLINED"
        :density="DENSITY.COMPACT"
        :color="tagColor(i)"
        class="cursor-pointer"
        :text="t(label, true)"
        @click="emit('update:selected-sort', i)"
      />
    </PageSection>
  </div>
</template>
