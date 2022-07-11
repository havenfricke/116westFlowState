<template lang="">
  <button class="text-white btn btn-primary hoverable mx-2 rounded">
    {{ chat.name }}
  </button>
</template>
<script>
export default {
  props: {
    chat: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>
<style lang=""></style>
