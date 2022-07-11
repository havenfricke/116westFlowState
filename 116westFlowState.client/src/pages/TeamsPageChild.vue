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
    <div>
      <h2 class="text-end border-bottom border-dark mx-3">
        <i
          class="mdi text-center fs-4 px-2 selectable rounded-circle mdi-pencil"
          data-bs-toggle="modal"
          data-bs-target="#teamsModal"
        ></i
        >The Cat Club
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
      <template #header>Teams & Chats</template>
      <template #body>does it work?</template>
    </OffCanvas>
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
import { useRoute } from "vue-router";

export default {
  name: "Teams",
  setup() {
    const route = useRoute();
    const editable = ref({});
    watchEffect(async () => {
      try {
        await chatService.getChatById(route.params.id);
        await messageService.getMessagesByChat(route.params.id);
      } catch (error) {
        logger.error(error);
      }
    });
    return {
      message: computed(() => AppState.messages),
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
