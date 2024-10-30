<script setup lang="ts">
import { DENSITY, SIZES } from '../../enums/vuetify.enums';
import { EXPERIENCES } from '../../constants/experiences.constants';
import ExperienceTimelineCard from './ExperienceTimelineCard.vue';
</script>

<template>
  <VTimeline
    side="end"
    :size="SIZES.SMALL"
    :align="'start'"
    justify="left"
  >
    <VTimelineItem
      v-for="item in EXPERIENCES"
      :key="item.position"
      :dot-color="item.color"
      :density="DENSITY.COMPACT"
      width="100%"
    >
      <ExperienceTimelineCard
        :size="item.size"
        :skills="item.skills"
        :color="item.color"
        :start-date="item.startDate"
        :end-date="item.endDate"
        :link="item.link"
        :place="item.place"
        :position="item.position"
        :description="item.description"
      />
    </VTimelineItem>
  </VTimeline>
</template>
