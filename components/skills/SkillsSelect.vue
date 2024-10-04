<script setup lang="ts">
import { values, without } from 'lodash-es';
import { capitalize } from 'vue';
import { Skills } from '~/enums/skills.enum';
import SkillTag from '~/components/shared/SkillTag.vue';
import { Variants, Colors, Density } from '~/enums/vuetify.enums';
import { STRINGS } from '~/constants/translations.constants';
import SkillIcon from '~/components/shared/SkillIcon.vue';
import PageSection from '~/components/shared/PageSection.vue';

interface Props {
  modelValue: Skills[];
}

const props = defineProps<Props>();

const skillOpts = computed(() => {
  return values(Skills).map((skill: Skills) => skill);
});

interface Emits {
  (e: 'update:modelValue', skills: Skills[]): void;
}

const emit = defineEmits<Emits>();

const selectedSkills = computed({
  get() {
    return props.modelValue;
  },
  set(skills: Skills[]) {
    emit('update:modelValue', skills);
  },
});

const removeSkill = (removedSkill: Skills) => {
  selectedSkills.value = without(selectedSkills.value, removedSkill);
};

const { isSmallScreen } = useBreakpoints();
</script>

<template>
  <PageSection :title="STRINGS.pageSections.skills">
    <VAutocomplete
      v-model="selectedSkills"
      :label="capitalize(STRINGS.btnLabels.skills)"
      :items="skillOpts"
      multiple
      chips
      closable-chips
      :density="Density.Compact"
      :variant="Variants.Outlined"
      clearable
      :hide-details="true"
    >
      <template #chip="{ props: itemProps, item }">
        <SkillTag
          v-bind="itemProps"
          :color="Colors.Primary"
          :skill="item.raw"
          class="cursor-pointer"
          :closable="true"
          :hide-label="!isSmallScreen"
          @remove-tag="removeSkill(item.raw)"
        />
      </template>

      <template #item="{ props: itemProps, item }">
        <VListItem
          v-bind="itemProps"
          :title="capitalize(item.raw)"
          :density="Density.Compact"
        >
          <template #prepend>
            <SkillIcon :skill="item.raw" />
          </template>
        </VListItem>
      </template>
    </VAutocomplete>
  </PageSection>
</template>
