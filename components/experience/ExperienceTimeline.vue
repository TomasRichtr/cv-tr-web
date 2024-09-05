<script setup lang="ts">
import ExperienceTimelineCard from '~/components/experience/ExperienceTimelineCard.vue';
import { EXPERIENCES } from '~/constants/experiences.constants';
import { Sizes } from '~/enums/vuetify.enums';
</script>

<template>
  <VTimeline
    side="end"
    :size="Sizes.Small"
    :align="'start'"
    justify="left"
  >
    <VTimelineItem
      v-for="item in EXPERIENCES"
      :key="item.position"
      :dot-color="item.color"
      density="compact"
    >
      <ExperienceTimelineCard v-bind="item" />
    </VTimelineItem>
  </VTimeline>
</template>
