<script setup lang="ts">
import type { Message } from '~/types/message.types';

interface Props {
  message: Message;
}

const props = defineProps<Props>();

const isVisibleVal = defineModel<boolean>('isVisible');

const { t } = useTranslations();
</script>

<template>
  <VDialog
    v-model="isVisibleVal"
    max-width="750px"
  >
    <VCard>
      <div class="grid grid-cols-2" />
      <!--      <template #title="titleProps"> -->
      <!--        <div -->
      <!--          v-bind="titleProps" -->
      <!--          class="flex" -->
      <!--        > -->
      <!--          <h6 class="capitalize mr-1.5"> -->
      <!--            {{ `${t('modal.title')}:` }} -->
      <!--          </h6> -->
      <!--          {{ `${props.message.name}` }} -->
      <!--        </div> -->
      <!--      </template> -->
      <!--      <VCard -->
      <!--        :title="`${t('modal.title')}: ${props.message.name} / ${t('inputLabels.company')}: ${props.message.company}`" -->
      <!--        :subtitle="`${t('inputLabels.phone')}: ${props.message.phone} / ${t('inputLabels.email')}: ${props.message.email}`" -->
      <!--        :text="`${t('inputLabels.message')}: ${props.message.message}`" -->
      <!--      /> -->
    </VCard>
  </VDialog>
</template>

<style scoped lang="scss">

</style>
