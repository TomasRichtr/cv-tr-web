<script setup lang="ts">
import { useUiStore } from '../../store/ui.store';
import { BTN_VARIANTS, LOCATIONS } from '../../enums/vuetify.enums';
import { NAVIGATION_OPTS } from '../../constants/navigation_opts.constants';
import LocalePicker from './LocalePicker.vue';

const { showNavDrawer } = storeToRefs(useUiStore());

const route = useRoute();

const { t, localePath } = useTranslations();
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
            :to="localePath({ name: item.to })"
            :variant="BTN_VARIANTS.PLAIN"
            class="flex items-center w-full"
            :disabled="route.name === item.to"
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
        <LocalePicker />
      </VListItem>
    </div>
  </VNavigationDrawer>
</template>
