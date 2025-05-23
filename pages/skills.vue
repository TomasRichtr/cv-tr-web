<script setup lang="ts">
import { entries, sortBy, values } from 'lodash-es';
import { useStorage } from '@vueuse/core';
import type { SkillDegree, Skills, Sorts } from '../enums/skills.enum';
import { SKILLS, SORTS } from '../enums/skills.enum';
import { SKILLS_DEGREE } from '../constants/skills.constants';
import PageWrapper from '../components/shared/PageWrapper.vue';
import SkillsPredefinedSelects from '../components/skills/SkillsPredefinedSelects.vue';
import SkillsHeader from '../components/skills/SkillsHeader.vue';
import SkillsList from '../components/skills/SkillsList.vue';
import SkillSelect from '../components/skills/SkillsSelect.vue';
import PageSection from '../components/shared/PageSection.vue';

const route = useRoute();

const storageSelectedSkills = useStorage<Skills[]>('selected-skills', [], sessionStorage);

const storageSelectedSort = useStorage<Sorts>('selected-sort', 0, sessionStorage);

const selectedSkills = ref<Skills[]>([]);

onMounted(() => {
  const defaultSelectedSkills = isEmpty(route.query.skills) ? [] : route.query.skills as Skills[];
  selectedSkills.value = isEmpty(defaultSelectedSkills) ? storageSelectedSkills.value : defaultSelectedSkills;
  selectedSort.value = !isNil(route.query.sort) ? +route.query.sort : storageSelectedSort.value || 0;
});

const router = useRouter();

watch(() => selectedSkills.value.length, () => {
  storageSelectedSkills.value = selectedSkills.value;
  router.replace({ query: { skills: selectedSkills.value, sort: selectedSort.value } });
});

const selectedSort = ref<Sorts>(SORTS.ALPHABETICALLY);

watch(() => selectedSort.value, () => {
  storageSelectedSort.value = selectedSort.value;
  router.replace({ query: { skills: selectedSkills.value, sort: selectedSort.value } });
});

const filteredSkills = computed(() => {
  if (isEmpty(selectedSkills.value)) return sortBySelectedSort(values(SKILLS));

  const filtered = values(SKILLS).filter(skill => selectedSkills.value.includes(skill));
  return sortBySelectedSort(filtered);
});

const selectSkills = (degreeUpdate: SkillDegree[]) => {
  if (isEqual(degreeUpdate, [0])) {
    selectedSkills.value = [];
    return;
  }
  selectedSkills.value = entries(SKILLS_DEGREE).reduce<string[]>((acc, [skill, degree]) => {
    if (degreeUpdate.includes(degree)) acc.push(skill);
    return acc;
  }, []) as Skills[];
};

const sortBySelectedSort = (skills: Skills[]) => {
  const sorter = selectedSort.value !== 0
    ? (skill: Skills) => {
        const degree = SKILLS_DEGREE[skill];
        return [degree !== selectedSort.value, degree];
      }
    : (skill: Skills) => skill;

  return sortBy(skills, sorter);
};

const { t } = useTranslations();
</script>

<template>
  <PageWrapper class="max-w-6xl gap-y-3">
    <SkillsPredefinedSelects
      v-model:selected-sort="selectedSort"
      :selected-skills="selectedSkills"
      @update:selected-degrees="selectSkills"
    />

    <SkillSelect v-model="selectedSkills" />
    <PageSection
      :title="t('pageSections.skillsOverview')"
    >
      <SkillsHeader />
      <SkillsList :skills="filteredSkills" />
    </PageSection>
  </PageWrapper>
</template>
