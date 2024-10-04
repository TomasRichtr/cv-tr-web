<script setup lang="ts">
import { capitalize } from 'vue';
import SkillTag from '~/components/shared/SkillTag.vue';
import dateUtils from '~/utils/date.utils';
import stringUtils from '~/utils/string.utils';
import type { Experience } from '~/types/data.types';
import { Colors, Sizes } from '~/enums/vuetify.enums';
import { STRINGS } from '~/constants/translations.constants';
import { RoutesEnums } from '~/enums/routes.enums';

const props = defineProps<Experience>();

const { isSmallScreen } = useBreakpoints();
</script>

<template>
  <VCard class="mb-10">
    <VCardTitle :class="[`bg-${props.color}`]">
      {{ props.position }}
      <div class="text-sm">
        {{ dateUtils.resolveDateString(props.startDate) }}
        <span>-</span>
        {{ dateUtils.resolveDateString(props.endDate) }}
        ({{ stringUtils.resolvePeriodLength({ startDate: props.startDate, endDate: props.endDate }) }})
      </div>
    </VCardTitle>

    <VCardSubtitle class="pt-2">
      {{ props.place }}
    </VCardSubtitle>

    <VCardText class="pt-2 pb-1">
      {{ props.description }}
    </VCardText>

    <VCardText class="pt-0 pb-1 relative">
      {{ capitalize(STRINGS.size) }}: <span class="absolute bottom-px">~</span>
      <span class="ml-2">{{ `${props.size} ${STRINGS.employees}` }}</span>
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
          :color="Colors.Easy"
          :size="Sizes.Small"
        />
      </a>
    </VCardText>

    <VCardText class="pt-0">
      <NuxtLink
        class="flex flex-wrap gap-x-2 gap-y-1 cursor-pointer"
        :to="{ name: RoutesEnums.Skills, query: { skills: props.skills } }"
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
