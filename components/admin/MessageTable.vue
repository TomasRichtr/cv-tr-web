<script setup lang="ts">
import type { Message } from '~/types/message.types';
import { useUiStore } from '~/store/ui.store';
import MessageTableActions from '~/components/admin/MessageTableActions.vue';

interface Props {
  messages: Message[];
  search: string;
}

const props = defineProps<Props>();

const { t } = useTranslations();

const headers = computed(() => {
  return [
    { key: 'name', title: t('inputLabels.name'), maxWidth: 200 },
    { key: 'company', title: t('inputLabels.company'), maxWidth: 200 },
    { key: 'email', title: t('inputLabels.email'), maxWidth: 150 },
    { key: 'phone', title: t('inputLabels.phone'), maxWidth: 100 },
    { key: 'message', title: t('inputLabels.message'), maxWidth: 500 },
    { title: t('actions'), key: 'actions', sortable: false, minWidth: 100, align: 'center' },
  ];
});

const { loading } = storeToRefs(useUiStore());

const { isSmallScreen } = useBreakpoints();
</script>

<template>
  <VDataTable
    :headers="headers"
    :items="props.messages"
    :search="props.search"
    :loading="loading"
    :mobile="isSmallScreen"
  >
    <template #[`item.actions`]="{ item }">
      <MessageTableActions :message="item" />
    </template>
  </VDataTable>
</template>
