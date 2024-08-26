<script setup lang="ts">
import { useUiStore } from '~/store/ui.store.';
import { BtnsVariants, Locations } from '~/enums/vuetify.enums';
import { NAVIGATION_OPTS } from '~/constants/navigation_opts.constants';

const { showNavDrawer } = storeToRefs(useUiStore());

const route = useRoute();
</script>

<template>
  <VNavigationDrawer
    v-model="showNavDrawer"
    temporary
    :location="Locations.Right"
  >
    <VList>
      <VListItem
        v-for="item in NAVIGATION_OPTS"
        :key="item.to"
      >
        <VBtn
          :to="{ name: item.to }"
          :variant="BtnsVariants.Plain"
          class="flex items-center"
          :disabled="route.name === item.to
          "
        >
          {{ item.text }}
          <template #prepend>
            <VIcon
              :icon="item.icon"
              class="mb-1"
            />
          </template>
        </VBtn>
      </VListItem>
    </VList>
  </VNavigationDrawer>
</template>
