<script setup lang="ts">
import type { Message } from '~/types/message.types';
import LabeledInfo from '~/components/shared/LabeledInfo.vue';

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
      <div class="grid grid-cols-2 p-8 gap-8">
        <LabeledInfo
          class="col-span-1"
          :label="t('labels.id', true)"
          :info="props.message.id"
        />
        <LabeledInfo
          class="col-span-1"
          :label="t('inputLabels.name', true)"
          :info="props.message.name"
        />
        <LabeledInfo
          class="col-span-1"
          :label="t('inputLabels.email', true)"
          :info="props.message.email"
        />
        <LabeledInfo
          class="col-span-1"
          :label="t('inputLabels.phone', true)"
          :info="props.message.phone"
        />
        <LabeledInfo
          class="col-span-1"
          :label="t('labels.read', true)"
          :info="props.message.read ? t('labels.yes') : t('labels.no')"
        />
        <LabeledInfo
          class="col-span-2"
          :label="t('inputLabels.message', true)"
          :info="props.message.message"
        />
      </div>
    </VCard>
  </VDialog>
</template>
