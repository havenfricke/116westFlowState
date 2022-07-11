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
    <div></div>
    <div class="row mt-2 d-flex ms-1 justify-content-center">
      <!--TODO Implement a search for messages and names - refer to Hatchways assignment-->
      <div
        style="height: 66vh; border: 1px solid #ccc; overflow: auto"
        id="chatMessage"
        class="col-6 bg-light rounded shadow"
      >
        <div class="mt-5">
          <h3 class="text-center mt-5">
            Select a chat or create one to get started
          </h3>
        </div>
      </div>

      <div class="col-6 container justify-content-center">
        <div class="row container">
          <form action="">
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
          </form>
          <div class="d-flex justify-content-end">
            <div class="col-2 justify-content-end text-end">
              <i
                style="max-height: 6vh"
                class="btn hoverable rounded bg-primary text-white selectable text-end fs-5 mdi mdi-send me-1 mt-2"
              ></i>
            </div>
          </div>
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
            data-bs-target="#createChatModal"
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
    <div class="row"></div>
  </div>
  <Modal id="createChatModal">
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
    <template #modalFooter> </template>
  </Modal>
</template>

<script>
import { AppState } from "../AppState";
import { chatService } from "../services/ChatService";
import { computed, ref, watchEffect } from "vue";
import { logger } from "../utils/Logger";
import { useRoute, useRouter } from "vue-router";

export default {
  name: "Teams",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const editable = ref({});
    watchEffect(async () => {
      try {
        await chatService.getAllChats();
      } catch (error) {
        logger.error(error);
      }
    });
    return {
      editable,
      async createChat() {
        try {
          await chatService.createChat(editable.value);
          router.push({
            name: "TeamsChild",
            params: { id: AppState.activeChat.id },
          });
        } catch (error) {
          logger.error(error);
        }
      },
      chats: computed(() => AppState.chats),
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
</style>
