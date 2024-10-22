<script setup lang="ts">
import { capitalize } from 'vue';
import IconBtn from '~/components/shared/IconBtn.vue';
import PageSection from '~/components/shared/PageSection.vue';
import { COLORS, SIZES, VARIANTS } from '~/enums/vuetify.enums';

const { t } = useTranslations();

const CONTACTS_INFO = [
  {
    text: `${t('name')} ${t('surname')}`,
    icon: 'mdi-contacts',
    size: SIZES.DEFAULT,
  },
  {
    icon: 'mdi-phone',
    text: '00 420 778 540 970',
    href: 'tel:00420778540970',
  },
  {
    icon: 'mdi-email',
    text: 't.richtr@email.cz',
    href: 'mailto:t.richtr@email.cz',
  },
  {
    icon: 'mdi-linkedin',
    text: 'linkedin.com/in/trichtr',
    href: 'https://linkedin.com/in/trichtr',
  },
  {
    icon: 'mdi-github',
    text: 'github.com/TomasRichtr',
    href: 'https://github.com/TomasRichtr',
  },
];
</script>

<template>
  <PageSection
    :title="t('pageSections.contacts', true)"
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
        :variant="VARIANTS.ELEVATED"
        :color="COLORS.PRIMARY"
        :size="contact.size || SIZES.X_SMALL"
        :href="contact.href"
      />
      <span
        v-if="i === 0"
        class="text-2xl"
      >
        {{ contact.text }}
      </span>

      <VBtn
        v-else
        :href="contact.href"
        target="_blank"
        :variant="VARIANTS.PLAIN"
        class="px-0 ml-2"
      >
        {{ contact.text }}
      </VBtn>
    </div>
  </PageSection>
</template>
