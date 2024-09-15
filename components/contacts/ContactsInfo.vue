<script setup lang="ts">
import { capitalize } from 'vue';
import IconBtn from '~/components/shared/IconBtn.vue';
import { Colors, Sizes, Variants } from '~/enums/vuetify.enums';
import { STRINGS } from '~/constants/strings.constants';
import PageSection from '~/components/shared/PageSection.vue';

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
  <PageSection
    :title="capitalize(STRINGS.pageSections.contacts)"
    class="gap-y-1"
  >
    <div
      v-for="(contact, i) in CONTACTS_INFO"
      :key="contact.text"
      class="flex gap-x-2 items-center"
      :class="{ 'ml-2': i !== 0 }"
    >
      <IconBtn
        :icon="contact.icon"
        :variant="Variants.Elevated"
        :color="Colors.Primary"
        :size="contact.size || Sizes.XSmall"
        :href="contact.to"
      />
      <span
        v-if="i === 0"
        class="text-2xl"
      >
        {{ contact.text }}
      </span>

      <VBtn
        v-else
        :to="contact.to"
        target="_blank"
        :variant="Variants.Plain"
        class="px-0 ml-2"
      >
        {{ contact.text }}
      </VBtn>
    </div>
  </PageSection>
</template>
