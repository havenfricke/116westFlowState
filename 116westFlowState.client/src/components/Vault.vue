<template lang="">
  <span class="navbar-text">
    <button
      @click="goTo('Vault')"
      class="btn selectable text-dark lighten-30 text-uppercase my-2 my-lg-0"
    >
      Vault
    </button>
  </span>
</template>
<script>
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    return {
      goTo(page) {
        router.push({
          name: page,
        });
      },
    };
  },
};
</script>
<style lang=""></style>
