<script setup lang="ts">
import { entries, values, sortBy } from 'lodash-es';
import { useStorage } from '@vueuse/core';
import SkillSelect from '~/components/skills/SkillsSelect.vue';
import SkillsHeader from '~/components/skills/SkillsHeader.vue';
import SkillsList from '~/components/skills/SkillsList.vue';
import SkillsPredefinedSelects from '~/components/skills/SkillsPredefinedSelects.vue';
import { SKILLS_DEGREE } from '~/constants/skills.constants';
import { type SkillDegree, Skills } from '~/enums/skills.enum';

const route = useRoute();

const storageSelectedSkills = useStorage<Skills[]>('selected-skills', []);

const selectedSkills = ref<Skills[]>([]);

onMounted(() => {
  const defaultSelectedSkills = isEmpty(route.query.skills) ? [] : route.query.skills as Skills[];
  selectedSkills.value = isEmpty(defaultSelectedSkills) ? storageSelectedSkills.value : defaultSelectedSkills;
});

const router = useRouter();

watch(() => selectedSkills.value.length, () => {
  storageSelectedSkills.value = selectedSkills.value;
  router.replace({ query: { skills: selectedSkills.value } });
});

const filteredSkills = computed(() => {
  if (isEmpty(selectedSkills.value)) return sortBySelectedSort(values(Skills));

  const filtered = values(Skills).filter(skill => selectedSkills.value.includes(skill));
  return sortBySelectedSort(filtered);
});

const selectGroup = (group: SkillDegree) => {
  selectedSkills.value = entries(SKILLS_DEGREE).reduce<string[]>((acc, [skill, degree]) => {
    if (degree === group) {
      acc.push(skill);
    }
    return acc;
  }, []) as Skills[];
};

const selectedSort = ref<number>(0);

const sortBySelectedSort = (skills: Skills[]) => {
  const sorter = selectedSort.value !== 0
    ? (skill: Skills) => {
        const degree = SKILLS_DEGREE[skill];
        return [degree !== selectedSort.value, degree];
      }
    : (skill: Skills) => skill;

  return sortBy(skills, sorter);
};
</script>

<template>
  <div class="flex flex-col gap-y-2">
    <SkillsPredefinedSelects
      v-model:selected-sort="selectedSort"
      @select-group="selectGroup"
    />
    <SkillSelect v-model="selectedSkills" />
    <SkillsHeader class="mt-2" />
    <SkillsList :skills="filteredSkills" />
  </div>
</template>
