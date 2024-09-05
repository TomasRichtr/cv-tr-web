<script setup lang="ts">
import { capitalize } from 'vue';
import FooterBtns from '~/components/shared/FooterBtns.vue';
import HeaderBar from '~/components/shared/HeaderBar.vue';
import NavigationDrawer from '~/components/shared/NavigationDrawer.vue';
import { RoutesEnums } from '~/enums/routes.enums';
import { STRINGS } from '~/constants/strings.constants';

const route = useRoute();

watch(() => route.name, () => {
  const page = route.name === RoutesEnums.Index ? STRINGS.home : route.name;
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
          <VContainer>
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
