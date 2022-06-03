<template>
  <div class="container-fluid">
    <button
      class="btn selectable bg-primary mdi text-light mdi-message-outline text-center fs-5 outline px-3 mt-1 ms-1 mt-0 mb-0 ms-0"
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
      <div
        style="height: 66vh; border: 1px solid #ccc; overflow: auto"
        id="chatMessage"
        class="col-6 bg-light rounded shadow"
      >
        <div class="mt-2">
          <img
            id="profileImg"
            class="img-fluid object-fit mt-2 rounded-circle"
            src="https://thiscatdoesnotexist.com"
            alt=""
          />

          <br />
          <b>Kitty cat</b>
          <br />
          <em class="fs-6">Director of Meow</em>
          <br />
          <p class="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            quia natus voluptas pariatur obcaecati minus explicabo animi
            voluptatem a. Obcaecati necessitatibus pariatur nihil ipsa aperiam
            vero corrupti quibusdam? Nisi, eius!
          </p>
        </div>
        <div class="mt-2">
          <img
            id="profileImg"
            class="img-fluid object-fit mt-2 rounded-circle"
            src="https://thiscatdoesnotexist.com"
            alt=""
          />

          <br />
          <b>Kitty cat</b>
          <br />
          <em class="fs-6">Director of Meow</em>
          <br />
          <p class="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            quia natus voluptas pariatur obcaecati minus explicabo animi
            voluptatem a. Obcaecati necessitatibus pariatur nihil ipsa aperiam
            vero corrupti quibusdam? Nisi, eius! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Qui sit nemo alias rerum facere quasi,
            fugit ipsam laboriosam totam facilis vitae esse aperiam velit quis
            magni eligendi, est accusantium inventore!
          </p>
        </div>
        <div class="mt-2">
          <img
            id="profileImg"
            class="img-fluid object-fit mt-2 rounded-circle"
            src="https://thiscatdoesnotexist.com"
            alt=""
          />

          <br />
          <b>Kitty cat</b>
          <br />
          <em class="fs-6">Director of Meow</em>
          <br />
          <p class="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            quia natus voluptas pariatur obcaecati minus explicabo animi
            voluptatem a. Obcaecati necessitatibus pariatur nihil ipsa aperiam
            vero corrupti quibusdam? Nisi, eius! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Qui sit nemo alias rerum facere quasi,
            fugit ipsam laboriosam totam facilis vitae esse aperiam velit quis
            magni eligendi, est accusantium inventore!
          </p>
        </div>
      </div>

      <div class="col-6 container justify-content-center">
        <div class="row container">
          <textarea
            placeholder="type your message here..."
            style="border: none; max-height: 20vh; min-height: 20vh"
            name="chatField"
            id="chatField"
            cols="890"
            rows="10"
            class="col-12"
            type="file"
          ></textarea>

          <div class="d-flex justify-content-end">
            <div class="col-2 justify-content-end text-end">
              <i
                style="max-height: 6vh"
                class="btn rounded bg-primary text-white selectable text-end fs-5 mdi mdi-send me-1 mt-0"
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
export default {
  name: "Teams",
  setup() {
    return {};
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
</style>
