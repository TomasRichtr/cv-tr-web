<script setup lang="ts">
import { useUiStore } from '~/store/ui.store';
import { NAVIGATION_OPTS } from '~/constants/navigation_opts.constants';
import LanguagePicker from '~/components/shared/LanguagePicker.vue';
import { LOCATIONS, VARIANTS } from '~/enums/vuetify.enums';

const { showNavDrawer } = storeToRefs(useUiStore());

const route = useRoute();

const { t } = useTranslations();
</script>

<template>
  <VNavigationDrawer
    v-model="showNavDrawer"
    temporary
    :location="LOCATIONS.RIGHT"
  >
    <div class="justify-between flex flex-col h-full">
      <VList>
        <VListItem
          v-for="item in NAVIGATION_OPTS"
          :key="item.to"
        >
          <VBtn
            :to="{ name: item.to }"
            :variant="VARIANTS.PLAIN"
            class="flex items-center w-full"
            :disabled="route.name === item.to
            "
          >
            {{ t(item.text) }}
            <template #prepend>
              <VIcon
                :icon="item.icon"
                class="mb-1"
              />
            </template>
          </VBtn>
        </VListItem>
      </VList>
      <VListItem>
        <LanguagePicker />
      </VListItem>
    </div>
  </VNavigationDrawer>
</template>
