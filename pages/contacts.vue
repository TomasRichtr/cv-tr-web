<script setup lang="ts">
import ContactsInfo from '../components/contacts/ContactsInfo.vue';
import PageWrapper from '../components/shared/PageWrapper.vue';
import ContactsForm from '../components/contacts/ContactsForm.vue';
</script>

<template>
  <PageWrapper class="min-w-full">
    <ContactsInfo />
    <ContactsForm />
  </PageWrapper>
</template>
