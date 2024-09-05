<script setup lang="ts">
import type { NuxtError } from '#app';
import { Colors } from '~/enums/vuetify.enums';
import type { Quote } from '~/types/data.types';
import { RoutesEnums } from '~/enums/routes.enums';
import IconBtn from '~/components/shared/IconBtn.vue';

interface Props {
  error: NuxtError;
}

const props = defineProps<Props>();

const quote = ref<Quote | null>({});

const isLoading = ref<boolean>(true);

onMounted(async () => {
  const { data } = await useFetch('/api/quotes');
  quote.value = data.value;
  isLoading.value = false;
});

onBeforeRouteLeave(() => {
  clearError();
});
</script>

<template>
  <VEmptyState
    v-if="!isLoading"
    :headline="String(props.error?.statusCode)"
    :title="decodeURIComponent(props.error?.message) "
    :bg-color="Colors.Background"
    height="100%"
  >
    <template #text>
      <div v-html="quote?.h" />
    </template>
    <template #actions>
      <IconBtn
        :color="Colors.Primary"
        icon="mdi-home"
        :to="RoutesEnums.Index"
      />
    </template>
  </VEmptyState>
</template>
