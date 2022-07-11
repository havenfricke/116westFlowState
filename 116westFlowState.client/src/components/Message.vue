<template>
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
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quia natus
    voluptas pariatur obcaecati minus explicabo animi voluptatem a. Obcaecati
    necessitatibus pariatur nihil ipsa aperiam vero corrupti quibusdam? Nisi,
    eius!
  </p>
  <i class="mdi mdi-file hoverable"><em> View Attachment(s)</em></i>
</template>
<script>
export default {
  props: {
    message: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>
<style>
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
