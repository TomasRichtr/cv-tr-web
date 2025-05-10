<script setup lang="ts">
import myPhoto from 'assets/images/my_photo.png';
import myPhotoLowRes from 'assets/images/my_photo_low_res.png';

const { t } = useTranslations();
</script>

<template>
  <div class="fixed bottom-0 h-full w-full">
    <div class="text-3xl z-0 fixed left-4 top-48 w-52 sm:w-full text-primary font-semibold capitalize">
      {{ t('description') }}
    </div>
    <div class="fixed z-0 bottom-0 left-24 scale-150 -scale-x-150 w-full">
      <VImg
        class="fixed bottom-0"
        :src="myPhoto"
        :lazy-src="myPhotoLowRes"
        height="70dvh"
      />
    </div>
  </div>
</template>
