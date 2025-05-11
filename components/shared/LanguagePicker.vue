<script setup lang="ts">
import eng from 'assets/images/eng.png';
import cze from 'assets/images/cze.png';
import { LANGUAGES } from '../../enums/ui.enums';
import { BTN_VARIANTS, COLORS } from '../../enums/vuetify.enums';
import { useUiStore } from '../../store/ui.store';

const { language } = storeToRefs(useUiStore());
const route = useRoute();
const router = useRouter();

// Function to switch language and update URL
const switchLanguage = (newLanguage: string) => {
  // Only navigate if the language is actually changing
  if (language.value !== newLanguage) {
    language.value = newLanguage;

    // Get the current route name and params
    const routeName = route.name as string;
    const params = { ...route.params, lang: newLanguage };

    // Navigate to the same route but with the new language
    router.push({ name: routeName, params });
  }
};
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
      :color="language === LANGUAGES.ENGLISH ? COLORS.PRIMARY : undefined"
      :variant="language === LANGUAGES.ENGLISH ? BTN_VARIANTS.ELEVATED : BTN_VARIANTS.OUTLINED"
      @click="switchLanguage(LANGUAGES.ENGLISH)"
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
      :color="language === LANGUAGES.CZECH ? COLORS.PRIMARY : undefined"
      :variant="language === LANGUAGES.CZECH ? BTN_VARIANTS.ELEVATED : BTN_VARIANTS.OUTLINED"
      @click="switchLanguage(LANGUAGES.CZECH)"
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
