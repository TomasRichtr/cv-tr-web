<script setup lang="ts">
import { capitalize } from 'vue';
import FooterBtns from '~/components/FooterBtns.vue';
import NavigationDrawer from '~/components/NavigationDrawer.vue';
import { Routes } from '~/enums/routes';
import { STRINGS } from '~/constants/strings';

const route = useRoute();

watch(() => route.name, () => {
  const page = route.name === Routes.Index ? STRINGS.home : route.name;
  useHead({
    title: `Tomas Richtr / ${capitalize(String(page))}`,
  });
}, { immediate: true });
</script>

<template>
  <VApp>
    <VLayout>
      <HeaderBar />
      <NavigationDrawer />

      <VMain scrollable>
        <div class="p-2 h-full">
          <NuxtPage />
        </div>
      </VMain>
    </VLayout>

    <FooterBtns />
  </VApp>
</template>
