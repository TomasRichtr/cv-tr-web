<script setup lang="ts">
import { capitalize } from 'vue';
import { type Colors, BTN_VARIANTS } from '~/enums/vuetify.enums';
import SkillIcon from '~/components/shared/SkillIcon.vue';

interface Props {
  skill: string;
  color: Colors;
  closable?: boolean;
  hideLabel?: boolean;
  externalLink?: string | null;
}

const props = withDefaults(defineProps<Props>(), {
  closable: false,
  hideLabel: false,
  externalLink: null,
});

interface Emits {
  (e: 'remove-tag'): void;
}

const emit = defineEmits<Emits>();
</script>

<template>
  <VChip
    v-tooltip:top="{ text: capitalize(props.skill), disabled: !props.hideLabel }"
    class="capitalize"
    :class="{ 'cursor-pointer': props.externalLink }"
    :variant="BTN_VARIANTS.OUTLINED"
    :color="props.color"
    :closable="props.closable"
    :tag="props.externalLink ? 'a' : undefined"
    :href="props.externalLink || ''"
    target="_blank"
    @click:close="emit('remove-tag')"
  >
    <div class="flex gap-1 line-clamp-1">
      <SkillIcon :skill="props.skill" />
      <span
        v-if="!props.hideLabel"
      >
        {{ props.skill }}
      </span>
      <VIcon
        v-if="props.externalLink"
        icon="mdi-open-in-new"
      />
    </div>
  </VChip>
</template>
