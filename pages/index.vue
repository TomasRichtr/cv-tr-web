<script setup lang="ts">
import myPhoto from 'assets/images/my_photo.png';
import myPhotoLowRes from 'assets/images/my_photo_low_res.png';
import PageWrapper from '../components/shared/PageWrapper.vue';

const { t } = useTranslations();
</script>

<template>
  <PageWrapper class="fixed bottom-0 h-full w-full">
    <div
      class="text-3xl z-0 fixed left-4 top-48 w-52 sm:w-full text-primary font-semibold capitalize"
      data-cy="description"
    >
      {{ t('description') }}
    </div>
    <div
      class="fixed z-0 bottom-0 left-24 scale-150 -scale-x-150 w-full"
      data-cy="image-container"
    >
      <VImg
        class="fixed bottom-0"
        data-cy="profile-image"
        :src="myPhoto"
        :lazy-src="myPhotoLowRes"
        height="70dvh"
      />
    </div>
  </PageWrapper>
</template>
