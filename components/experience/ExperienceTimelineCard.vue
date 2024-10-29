<script setup lang="ts">
import SkillTag from '../shared/SkillTag.vue';
import { ROUTES } from '../../enums/routes';
import type { Experience } from '../../types/data.types';
import { COLORS, SIZES } from '../../enums/vuetify.enums';

const props = defineProps<Experience>();

const { isSmallScreen } = useBreakpoints();

const { t } = useTranslations();

const { resolveDateString } = useDatetime();

const { resolvePeriodLength } = useString();
</script>

<template>
  <VCard class="mb-10">
    <VCardTitle :class="[`bg-${props.color}`]">
      {{ props.position }}
      <div class="text-sm">
        {{ resolveDateString(props.startDate) }}
        <span>-</span>
        {{ resolveDateString(props.endDate) }}
        ({{ resolvePeriodLength({ startDate: props.startDate, endDate: props.endDate }) }})
      </div>
    </VCardTitle>

    <VCardSubtitle class="pt-2">
      {{ props.place }}
    </VCardSubtitle>

    <VCardText class="pt-2 pb-1">
      {{ props.description }}
    </VCardText>

    <VCardText class="pt-0 pb-1 relative">
      {{ t('size', true) }}: <span class="absolute bottom-px">~</span>
      <span class="ml-2">{{ `${props.size} ${t('employees')}` }}</span>
    </VCardText>

    <VCardText class="pt-0">
      <a
        class="text-easy flex gap-1 align-baseline"
        target="_blank"
        :href="props.link"
      >
        {{ props.link }}
        <VIcon
          icon="mdi-open-in-new"
          :color="COLORS.EASY"
          :size="SIZES.SMALL"
        />
      </a>
    </VCardText>

    <VCardText class="pt-0">
      <NuxtLink
        class="flex flex-wrap gap-x-2 gap-y-1 cursor-pointer"
        :to="{ name: ROUTES.SKILLS, query: { skills: props.skills } }"
      >
        <SkillTag
          v-for="skill in props.skills"
          :key="skill"
          :skill="skill"
          :color="props.color"
          :hide-label="!isSmallScreen"
        />
      </NuxtLink>
    </VCardText>
  </VCard>
</template>
