<script setup lang="ts">
import { Sizes } from '~/enums/vuetify';
import { EXPERIENCE_ITEMS } from '~/constants/experienceTimeline';
import ExperienceTimelineCard from '~/components/experienceTimeline/ExperienceTimelineCard.vue';
</script>

<template>
  <VTimeline
    side="end"
    :size="Sizes.Small"
    :align="'start'"
    justify="left"
  >
    <VTimelineItem
      v-for="item in EXPERIENCE_ITEMS"
      :key="item.position"
      :dot-color="item.color"
      density="compact"
    >
      <ExperienceTimelineCard v-bind="item" />
    </VTimelineItem>
  </VTimeline>
</template>
