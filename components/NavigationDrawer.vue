<script setup lang="ts">
import { useUiStore } from '~/store/uiStore';
import { BtnsVariants, Locations } from '~/enums/vuetify';
import { navigationDrawerItems } from '~/constants/navigationDrawer';

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
        v-for="item in navigationDrawerItems"
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
