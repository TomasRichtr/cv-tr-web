<script setup lang="ts">
import type { VChip } from 'vuetify/components';
import { capitalize } from 'vue';
import { uniq, values, isEmpty } from 'lodash-es';
import { STRINGS } from '~/constants/strings.constants';
import { Colors, Density, Variants } from '~/enums/vuetify.enums';
import { HEADER_LABELS, SKILLS_DEGREE, SORTING } from '~/constants/skills.constants';
import type { Skills } from '~/enums/skills.enum';
import { SkillDegree } from '~/enums/skills.enum';
import PageSection from '~/components/shared/PageSection.vue';

interface Props {
  selectedSort?: number;
  selectedSkills?: Skills[];
}

const props = withDefaults(defineProps<Props>(), {
  selectedSort: 0,
  selectedSkills: () => [],
});

interface Emits {
  (e: 'update:selected-degrees', degree: SkillDegree[]): void;
  (e: 'update:selected-sort', sort: number): void;
}

const emit = defineEmits<Emits>();

const tagColor = (degree: SkillDegree) => {
  return {
    [SkillDegree.FewTime]: Colors.Primary,
    [SkillDegree.Often]: Colors.Secondary,
    [SkillDegree.Daily]: Colors.Warning,
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
  if (degreeUpdate === 0 && isEmpty(props.selectedSkills)) return Variants.Elevated;
  const isDegreeUpdateSelected = selectedDegrees.value.includes(degreeUpdate);
  const allSkillDegreesCount = values(SKILLS_DEGREE).filter(degree => degree === degreeUpdate).length;
  const selectedSkillDegreesCount = props.selectedSkills.filter(skill => SKILLS_DEGREE[skill] === degreeUpdate).length;
  return isDegreeUpdateSelected && allSkillDegreesCount === selectedSkillDegreesCount
    ? Variants.Elevated
    : Variants.Outlined;
};
</script>

<template>
  <div class="flex flex-col gap-y-3">
    <PageSection
      class="flex flex-row flex-wrap gap-2"
      :title="STRINGS.pageSections.filters"
    >
      <VChip
        v-for="(label, i) in [STRINGS.labels.all, ...HEADER_LABELS]"
        :key="label"
        :variant="isDegreeChipSelected(i)"
        :density="Density.Compact"
        :color="tagColor(i)"
        class="cursor-pointer"
        :text="capitalize(label)"
        @click="selectDegree(i)"
      />
    </PageSection>

    <PageSection
      class="flex flex-row flex-wrap gap-2"
      :title="STRINGS.pageSections.sorters"
    >
      <VChip
        v-for="(label, i) in SORTING"
        :key="label"
        :variant="props.selectedSort === i ? Variants.Elevated : Variants.Outlined"
        :density="Density.Compact"
        :color="tagColor(i)"
        class="cursor-pointer"
        :text="capitalize(label)"
        @click="emit('update:selected-sort', i)"
      />
    </PageSection>
  </div>
</template>
