<script setup lang="ts">
import eng from 'assets/images/eng.png';
import cze from 'assets/images/cze.png';
import { useUiStore } from '~/store/ui.store';
import { LANGUAGES } from '~/enums/ui.enums';
import { COLORS, VARIANTS } from '~/enums/vuetify.enums';

const { language } = storeToRefs(useUiStore());
</script>

<template>
  <VBtnGroup
    v-model="language"
    mandatory
    class="w-full"
    rounded="xl"
  >
    <VBtn
      width="50%"
      :color="language === LANGUAGES.ENGLISH ? COLORS.PRIMARY : null"
      :variant="language === LANGUAGES.ENGLISH ? VARIANTS.ELEVATED : VARIANTS.OUTLINED"
      @click="language = LANGUAGES.ENGLISH"
    >
      <div class="flex items-end gap-1">
        <VImg
          :src="eng"
          height="20"
          width="30"
        />
        <div>ENG</div>
      </div>
    </VBtn>

    <VBtn
      width="50%"
      :color="language === LANGUAGES.CZECH ? COLORS.PRIMARY : null"
      :variant="language === LANGUAGES.CZECH ? VARIANTS.ELEVATED : VARIANTS.OUTLINED"
      @click="language = LANGUAGES.CZECH"
    >
      <div class="flex items-end gap-1">
        <VImg
          :src="cze"
          height="20"
          width="30"
        />
        CZE
      </div>
    </VBtn>
  </VBtnGroup>
</template>
