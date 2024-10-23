<script setup lang="ts">
import { capitalize } from 'vue';
import FooterBtns from '~/components/shared/FooterBtns.vue';
import HeaderBar from '~/components/shared/HeaderBar.vue';
import NavigationDrawer from '~/components/shared/NavigationDrawer.vue';
import { ROUTES_ENUMS } from '~/enums/routes.enums';

const route = useRoute();

const { t } = useTranslations();

watch(() => route.name, () => {
  const page = route.name === ROUTES_ENUMS.INDEX ? t('home') : route.name;
  useHead({
    title: `Tomas Richtr / ${capitalize(String(page))}`,
  });
}, { immediate: true });

const isPageLoading = ref<boolean>(true);

onMounted(async () => {
  await nextTick();
  isPageLoading.value = false;
});
</script>

<template>
  <VResponsive>
    <VApp>
      <HeaderBar />
      <NavigationDrawer />
      <template v-if="!isPageLoading">
        <VMain scrollable>
          <VContainer height="100%">
            <NuxtPage />
          </VContainer>
        </VMain>
        <FooterBtns />
      </template>
    </VApp>
  </VResponsive>
</template>

<style lang="scss">
.v-main--scrollable > .v-main__scroller {
  overflow-x: hidden;
}
</style>
