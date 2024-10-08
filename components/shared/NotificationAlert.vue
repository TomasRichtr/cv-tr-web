<script setup lang="ts">
import { getCurrentInstance } from 'vue';
import type { NotificationAlertProps } from '~/types/notification_alert.types';
import { ALERT_TYPES } from '~/enums/vuetify.enums';

const props = withDefaults(defineProps<NotificationAlertProps>(), {
  type: ALERT_TYPES.SUCCESS,
});

const timeout = ref<number>(0);

const ANIMATION_TIME = 500;

const ALERT_DURATION = 5000;

const interval = setInterval(() => {
  if (timeout.value > 100) {
    clearInterval(interval);
    alertWrapperRef.value!.classList.add('slide-out-right');
    setTimeout(() => notificationAlertApp.value?.unmount(), ANIMATION_TIME);
  }
  ++timeout.value;
}, ALERT_DURATION / 100);

const alertWrapperRef = ref<HTMLDivElement>();

const notificationAlertApp = ref();

onMounted(() => {
  notificationAlertApp.value = getCurrentInstance()?.appContext.app;
});
</script>

<template>
  <div
    ref="alertWrapperRef"
    class="absolute slide-in-right z-float top-[10%] right-0"
  >
    <VAlert
      :text="props.text"
      :title="props.title"
      :type="props.type"
    />
    <VProgressLinear :model-value="timeout" />
  </div>
</template>
