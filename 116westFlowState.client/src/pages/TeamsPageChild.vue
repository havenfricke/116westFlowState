<template>
  <div class="container-fluid">
    <button
      style="border: none"
      class="hoverable bg-primary rounded mdi text-light mdi-message-outline text-center fs-5 outline px-3 mt-1 ms-1 mt-0 mb-0 ms-0"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#teamsOffCanvas"
      aria-controls="teamsOffCanvas"
    ></button>
    <div class="row">
      <h2 class="text-end px-5 col-12 border-bottom border-dark mx-3">
        <i
          class="mdi text-center fs-4 px-2 selectable rounded-circle mdi-pencil"
          data-bs-toggle="modal"
          data-bs-target="#teamsModal"
        ></i
        >{{ activeChat.name }}
      </h2>
    </div>
    <div class="row d-flex ms-1 justify-content-center">
      <!--TODO Implement a search for messages and names - refer to Hatchways assignment-->
      <div
        style="height: 66vh; border: 1px solid #ccc; overflow: auto"
        id="chatMessage"
        class="col-6 bg-light rounded shadow"
      >
        <div v-for="m in messages" :key="m.id" class="mt-2">
          <Message :message="m" />
        </div>
      </div>

      <div class="col-6 container justify-content-center">
        <div class="row container">
          <form @submit.prevent="createMessage">
            <textarea
              placeholder="type your message here..."
              style="border: none; max-height: 25vh; min-height: 20vh"
              name="chatField"
              id="chatField"
              cols="890"
              rows="10"
              class="col-12 rounded"
              type="file"
            ></textarea>
            <input
              style="border: none"
              class="col-12 bg-grey p-2 rounded"
              type="file"
              id="input"
              multiple
            />
            <div class="d-flex justify-content-end">
              <button
                class="col-2 mb-5 text-center btn hoverable rounded bg-primary text-white selectable fs-5 mdi mdi-send me-1 mt-2"
              >
                <i style="max-height: 6vh" class=""></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <OffCanvas class="bg-dark" id="teamsOffCanvas">
      <template #header>
        <h3>
          Chats
          <button
            title="add chat"
            class="text-white btn btn-primary mx-2 rounded"
            data-bs-toggle="modal"
            data-bs-target="#createChatChildModal"
            data-bs-close="teamsOffCanvas"
          >
            +
          </button>
        </h3>
      </template>
      <template #body>
        <div class="p-2 d-flex justify-content-around">
          <div v-for="c in chats" :key="c.id">
            <Chat :chat="c" />
          </div>
        </div>
      </template>
    </OffCanvas>
    <Modal id="createChatChildModal">
      <template #modalTitle>Create Chat</template>
      <template class="row bg-dark" #modalBody>
        <form @submit.prevent="createChat">
          <div>
            <input
              class="col-12"
              type="text"
              name=""
              id=""
              placeholder="Name your chat..."
              v-model="editable.name"
            />
          </div>
          <button class="btn btn-primary text-light">Create</button>
        </form>
      </template>
      <template #modalFooter></template>
    </Modal>
    <Modal id="teamsModal">
      <template #modalTitle>Edit Chat</template>
      <template class="row" #modalBody>
        <div>
          <input
            class="col-12"
            type="text"
            name=""
            id=""
            placeholder="Edit Name..."
          />
        </div>
      </template>
    </Modal>
    <div class="row"></div>
  </div>
</template>

<script>
import { AppState } from "../AppState";
import { messageService } from "../services/MessageService";
import { chatService } from "../services/ChatService";
import { computed, ref, watchEffect } from "vue";
import { logger } from "../utils/Logger";
import { useRoute, useRouter } from "vue-router";

export default {
  name: "TeamsChild",
  setup() {
    const route = useRoute();
    const editable = ref({});
    const editable2 = ref({});
    const router = useRouter();
    watchEffect(async () => {
      try {
        await chatService.getChatById(route.params.id);
        await messageService.getMessagesByChat(route.params.id);
        await chatService.getAllChats();
      } catch (error) {
        logger.error(error);
      }
    });
    return {
      editable,
      editable2,
      async createChat() {
        try {
          await chatService.createChat(editable.value);
          await chatService.getAllChats();
          router.push({
            name: "TeamsChild",
            params: { id: AppState.activeChat.id },
          });
        } catch (error) {
          logger.error(error);
        }
      },
      async createMessage() {
        try {
          await messageService.createMessage(editable2.value, route.params.id);
        } catch (error) {
          logger.error(error);
        }
      },
      chats: computed(() => AppState.chats),
      message: computed(() => AppState.messages),
      activeChat: computed(() => AppState.activeChat),
    };
  },
};
</script>

<style scoped>
#profileImg {
  max-height: 7vh;
}
#chatMessage {
  min-height: 5vh;
}
.hoverable:hover {
  transform: scale(1.005);
  filter: drop-shadow(0px 15px 10px rgba(0, 0, 0, 0.3));
  transition: 300ms ease-in-out;
  cursor: pointer;
}
.hoverable:active {
  transform: scale(0.95);
  transition: 100ms ease-in-out;
}
div {
  overflow: hidden;
}
</style>
