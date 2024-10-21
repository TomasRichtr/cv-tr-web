<script setup lang="ts">
import { capitalize } from 'vue';
import { VForm } from 'vuetify/components';
import PageSection from '~/components/shared/PageSection.vue';
import { useMessageApi } from '~/composables/messages.composables';
import { useUiStore } from '~/store/ui.store';
import { COLORS, VARIANTS } from '~/enums/vuetify.enums';
import { useContactForm } from '~/composables/contact_form.composables';

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
        v-for="input in contactForm"
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
        @click="submitNewMessage"
      >
        <span class="text-background">{{ t('btnLabels.submit') }}</span>
      </VBtn>
    </VForm>
  </PageSection>
</template>
