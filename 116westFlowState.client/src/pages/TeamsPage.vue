<template>
  <div class="container-fluid">
    <button
      class="btn selectable bg-primary mdi text-light mdi-message-outline text-center fs-5 outline px-3 mt-2 ms-1 mt-0 mb-2 ms-0"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#teamsOffCanvas"
      aria-controls="teamsOffCanvas"
    ></button>
    <div>
      <h1 class="text-end border-bottom border-dark mx-3">The Cat Club</h1>
    </div>
    <div class="row d-flex ms-1 justify-content-center">
      <div id="chatMessage" class="col-6 bg-light rounded shadow">
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
        <p class="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quia
          natus voluptas pariatur obcaecati minus explicabo animi voluptatem a.
          Obcaecati necessitatibus pariatur nihil ipsa aperiam vero corrupti
          quibusdam? Nisi, eius!
        </p>
      </div>

      <div class="col-6 rounded d-flex justify-content-center">
        <textarea
          placeholder="type your message here..."
          style="border: none"
          name="chatField"
          id="chatField"
          cols="890"
          rows="10"
        ></textarea>
      </div>
      <div class="d-flex justify-content-end mx-3">
        <i
          class="col-1 btn rounded bg-light selectable text-center fs-4 mdi mdi-send me-1 mt-2"
        ></i>
      </div>
    </div>
    <OffCanvas class="bg-dark" id="teamsOffCanvas">
      <template #header>Teams & Chats</template>
      <template #body>does it work?</template>
    </OffCanvas>
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
  min-height: 10vh;
}
</style>
