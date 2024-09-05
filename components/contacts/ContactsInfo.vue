<script setup lang="ts">
import IconBtn from '~/components/shared/IconBtn.vue';
import { Colors, Sizes, Variants } from '~/enums/vuetify.enums';
import { STRINGS } from '~/constants/strings.constants';

const CONTACTS_INFO = [
  {
    text: `${STRINGS.name} ${STRINGS.surname}`,
    icon: 'mdi-contacts',
    size: Sizes.Default,
  },
  {
    icon: 'mdi-phone',
    text: '00 420 778 540 970',
    to: 'tel:00420778540970',
  },
  {
    icon: 'mdi-email',
    text: 't.richtr@email.cz',
    to: 'mailto:t.richtr@email.cz',
  },
  {
    icon: 'mdi-linkedin',
    text: 'linkedin.com/in/trichtr',
    to: 'https://linkedin.com/in/trichtr',
  },
  {
    icon: 'mdi-github',
    text: 'github.com/TomasRichtr',
    to: 'https://github.com/TomasRichtr',
  },
];
</script>

<template>
  <div class="flex flex-col gap-2 justify-center">
    <div class="flex flex-col gap-2 ml-2">
      <div
        v-for="(contact, i) in CONTACTS_INFO"
        :key="contact.text"
        class="flex gap-2 items-center"
        :class="{ 'ml-1': i !== 0 }"
      >
        <IconBtn
          :icon="contact.icon"
          :variant="Variants.Elevated"
          :color="Colors.Primary"
          :size="contact.size || Sizes.Small"
          :href="contact.to"
        />
        <span :class="{ 'ml-1': i !== 0 }">
          {{ contact.text }}
        </span>
      </div>
    </div>
  </div>
</template>
