<script setup lang="ts">
import type { Skills } from '../../enums/skills.enum';
import SkillRow from './SkillRow.vue';

interface Props {
  skills: Skills[];
}

const props = defineProps<Props>();
</script>

<template>
  <TransitionGroup
    name="list"
    tag="ul"
    class="flex flex-col gap-2"
  >
    <SkillRow
      v-for="(skill, i) in props.skills"
      :key="skill"
      :is-first="i === 0"
      :skill="skill"
    />
  </TransitionGroup>
</template>

<style lang="scss">
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
