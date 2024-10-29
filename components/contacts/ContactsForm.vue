<script setup lang="ts">
import { VForm } from 'vuetify/components';
import { useUiStore } from '../../store/ui.store';
import { BTN_VARIANTS, COLORS } from '../../enums/vuetify.enums';
import PageSection from '../shared/PageSection.vue';

const {
  contactFormRef,
  form,
  isValid,
  submitNewMessage,
} = useMessageApi();

const { loading } = storeToRefs(useUiStore());

const { t } = useTranslations();

const { contactForm } = useContactForm();
</script>

<template>
  <PageSection :title="t('pageSections.contactForm', true)">
    <VForm
      ref="contactFormRef"
      v-model="isValid"
      validate-on="input"
      class="flex flex-col gap-1.5"
      @submit.prevent.stop
    >
      <component
        :is="input.component"
        v-for="input in contactForm"
        :key="input.name"
        v-model="form[input.name as never]"
        :label="input.label"
        :variant="BTN_VARIANTS.OUTLINED as never"
        :counter="input.counter"
        :rules="input.rules"
        :type="input.type"
        :loading="loading"
        :disabled="loading"
        :name="input.name"
      />
      <VBtn
        :variant="BTN_VARIANTS.ELEVATED"
        :disabled="!isValid"
        :color="COLORS.PRIMARY"
        @click="submitNewMessage"
      >
        <span class="text-background">{{ t('buttons.submit') }}</span>
      </VBtn>
    </VForm>
  </PageSection>
</template>
