<script setup lang="ts">
import { capitalize } from 'vue';
import { STRINGS } from '~/constants/strings.constants';
import type { ContactForm } from '~/types/data.types';
import { Variants, Colors } from '~/enums/vuetify.enums';
import { CONTACT_FORM_INPUTS } from '~/constants/contact_form.constants';
import PageSection from '~/components/shared/PageSection.vue';

const form = reactive<ContactForm>({
  name: '',
  email: '',
  message: '',
});

const submitContactMessage = (e: SubmitEvent) => {
  e.preventDefault();
  if (!isValid.value) return;

  console.log(form);
};

const isValid = ref<boolean>(false);
</script>

<template>
  <PageSection :title="capitalize(STRINGS.pageSections.contactForm)">
    <VForm
      v-model="isValid"
      validate-on="input"
      class="flex flex-col gap-1.5"
      @submit="submitContactMessage"
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
        :name="input.name"
      />
      <VBtn
        type="submit"
        :variant="Variants.Elevated"
        :disabled="!isValid"
        :color="Colors.Primary"
      >
        {{ STRINGS.btnLabels.submit }}
      </VBtn>
    </VForm>
  </PageSection>
</template>
