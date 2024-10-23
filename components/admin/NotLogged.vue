<script setup lang="ts">
import { COLORS } from '~/enums/vuetify.enums';
import { ROUTES } from '~/enums/routes';
import IconBtn from '~/components/shared/IconBtn.vue';

const refreshPage = () => {
  reloadNuxtApp({
    path: `/${ROUTES.ADMIN}`,
    ttl: 500,
  });
};

const { t } = useTranslations();
</script>

<template>
  <VEmptyState
    :headline="t('unLogged.title')"
    :title="t('unLogged.description')"
    :bg-color="COLORS.BACKGROUND"
    class="absolute right-0 flex justify-center items-center w-full"
  >
    <template #actions>
      <IconBtn
        :color="COLORS.PRIMARY"
        icon="mdi-home"
        :to="ROUTES.INDEX"
      />
      <IconBtn
        :color="COLORS.PRIMARY"
        icon="mdi-refresh"
        :to="ROUTES.INDEX"
        @click="refreshPage"
      />
    </template>
  </VEmptyState>
</template>

<style scoped lang="scss">

</style>
