<script setup lang="ts">
import eng from 'assets/images/eng.png';
import cze from 'assets/images/cze.png';
import type { Locales } from '../../enums/ui.enums';
import { LOCALES } from '../../enums/ui.enums';
import { BTN_VARIANTS, COLORS } from '../../enums/vuetify.enums';

const { setLocale, locale } = useTranslations();

const switchLocale = (newLocale: Locales) => {
  setLocale(newLocale);
};
</script>

<template>
  <VBtnGroup
    v-model="locale"
    mandatory
    class="w-full"
    rounded="xl"
    @update:model-value="switchLocale"
  >
    <VBtn
      width="50%"
      :color="locale === LOCALES.ENGLISH ? COLORS.PRIMARY : undefined"
      :variant="locale === LOCALES.ENGLISH ? BTN_VARIANTS.ELEVATED : BTN_VARIANTS.OUTLINED"
      @click="switchLocale(LOCALES.ENGLISH as Locales)"
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
      :color="locale === LOCALES.CZECH ? COLORS.PRIMARY : undefined"
      :variant="locale === LOCALES.CZECH ? BTN_VARIANTS.ELEVATED : BTN_VARIANTS.OUTLINED"
      @click="switchLocale(LOCALES.CZECH as Locales)"
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
