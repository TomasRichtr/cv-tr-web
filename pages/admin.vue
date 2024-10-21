<script setup lang="ts">
import { useMessageApi } from '~/composables/messages.composables';
import MessageTable from '~/components/admin/MessageTable.vue';
import { useMessagesStore } from '~/store/messages.store';

const { getMessages } = useMessageApi();

const { messages } = storeToRefs(useMessagesStore());

onMounted(async () => {
  messages.value = await getMessages();
});
</script>

<template>
  <MessageTable :messages="messages" />
</template>

<style scoped lang="scss">

</style>
