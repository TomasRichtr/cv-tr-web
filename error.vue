<script setup lang="ts">
import type { NuxtError } from 'nuxt/dist/app';
import type { Quote } from './types/data.types';
import { COLORS } from './enums/vuetify.enums';
import { ROUTES } from './enums/routes.enums';
import IconBtn from './components/shared/IconBtn.vue';

interface Props {
  error: NuxtError;
}

const props = defineProps<Props>();

const quote = ref<Quote | null>({});

const isLoading = ref<boolean>(true);

onMounted(async () => {
  const { data } = await useFetch('/quotes');
  quote.value = data.value;
  isLoading.value = false;
  console.error(props.error);
});

onBeforeRouteLeave(() => {
  clearError();
});
</script>

<template>
  <VEmptyState
    v-if="!isLoading"
    :headline="String(props.error?.statusCode)"
    :title="decodeURIComponent(props.error?.message)"
    :bg-color="COLORS.BACKGROUND"
    height="100%"
  >
    <template #text>
      <div v-html="quote?.h" />
    </template>
    <template #actions>
      <IconBtn
        :color="COLORS.PRIMARY"
        icon="mdi-home"
        :to="ROUTES.INDEX"
      />
    </template>
  </VEmptyState>
</template>
