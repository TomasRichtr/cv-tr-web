<script setup lang="ts">
import { capitalize } from 'vue';
import { VForm } from 'vuetify/components';
import PageSection from '~/components/shared/PageSection.vue';
import { CONTACT_FORM_FIELDS } from '~/constants/contact_form.constants';
import { useMessageApi } from '~/composables/messages.composables';
import { useUiStore } from '~/store/ui.store';
import { COLORS, VARIANTS } from '~/enums/vuetify.enums';

const {
  contactFormRef,
  form,
  isValid,
  submitContactMessage,
} = useMessageApi();

const { loading } = storeToRefs(useUiStore());

const { t } = useTranslations();
</script>

<template>
  <PageSection :title="capitalize(t('pageSections.contactForm'))">
    <VForm
      ref="contactFormRef"
      v-model="isValid"
      validate-on="input"
      class="flex flex-col gap-1.5"
      @submit.prevent.stop
    >
      <component
        :is="input.component"
        v-for="input in CONTACT_FORM_FIELDS"
        :key="input.name"
        v-model="form[input.name]"
        :label="input.label"
        :variant="VARIANTS.OUTLINED"
        :counter="input.counter"
        :rules="input.rules"
        :type="input.type"
        :loading="loading"
        :disabled="loading"
        :name="input.name"
      />
      <VBtn
        :variant="VARIANTS.ELEVATED"
        :disabled="!isValid"
        :color="COLORS.PRIMARY"
        @click="submitContactMessage"
      >
        <span class="text-background">{{ t('btnLabels.submit') }}</span>
      </VBtn>
    </VForm>
  </PageSection>
</template>
