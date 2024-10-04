<script setup lang="ts">
import { capitalize } from 'vue';
import { VForm } from 'vuetify/components';
import PageSection from '~/components/shared/PageSection.vue';
import { CONTACT_FORM_INPUTS } from '~/constants/contact_form.constants';
import { STRINGS } from '~/constants/translations.constants';
import { Variants, Colors } from '~/enums/vuetify.enums';
import { useMessageApi } from '~/composables/messages.composables';
import { useUiStore } from '~/store/ui.store';

const {
  contactFormRef,
  form,
  isValid,
  submitContactMessage,
} = useMessageApi();

const { loading } = storeToRefs(useUiStore());
</script>

<template>
  <PageSection :title="capitalize(STRINGS.pageSections.contactForm)">
    <VForm
      ref="contactFormRef"
      v-model="isValid"
      validate-on="input"
      class="flex flex-col gap-1.5"
      @submit.prevent.stop
    >
      <component
        :is="input.component"
        v-for="input in CONTACT_FORM_INPUTS"
        :key="input.name"
        v-model="form[input.name]"
        :label="input.label"
        :variant="Variants.Outlined"
        :counter="input.counter"
        :rules="input.rules"
        :type="input.type"
        :loading="loading"
        :disabled="loading"
        :name="input.name"
      />
      <VBtn
        :variant="Variants.Elevated"
        :disabled="!isValid"
        :color="Colors.Primary"
        @click="submitContactMessage"
      >
        <span class="text-background">{{ STRINGS.btnLabels.submit }}</span>
      </VBtn>
    </VForm>
  </PageSection>
</template>
