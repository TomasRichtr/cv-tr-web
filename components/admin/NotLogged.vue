<script setup lang="ts">
import { COLORS } from '~/enums/vuetify.enums';
import { ROUTES_ENUMS } from '~/enums/routes.enums';
import IconBtn from '~/components/shared/IconBtn.vue';

const refreshPage = () => {
  reloadNuxtApp({
    path: `/${ROUTES_ENUMS.ADMIN}`,
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
    class="absolute flex justify-center items-center w-full"
  >
    <template #actions>
      <IconBtn
        :color="COLORS.PRIMARY"
        icon="mdi-home"
        :to="ROUTES_ENUMS.INDEX"
      />
      <IconBtn
        :color="COLORS.PRIMARY"
        icon="mdi-refresh"
        :to="ROUTES_ENUMS.INDEX"
        @click="refreshPage"
      />
    </template>
  </VEmptyState>
</template>

<style scoped lang="scss">

</style>
