<template>
  <button
    @click="goTo(chat.id)"
    class="text-white btn btn-primary hoverable mx-2 rounded"
  >
    {{ chat.name }}
  </button>
</template>
<script>
import { useRouter } from "vue-router";
import { AppState } from "../AppState";
import { chatService } from "../services/ChatService";
import { messageService } from "../services/MessageService";

export default {
  props: {
    chat: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const router = useRouter();
    return {
      async goTo(chatId) {
        await chatService.getChatById(chatId);
        await messageService.getMessagesByChat(chatId);
        router.push({
          name: "TeamsChild",
          params: { id: chatId },
        });
      },
    };
  },
};
</script>
<style lang=""></style>
