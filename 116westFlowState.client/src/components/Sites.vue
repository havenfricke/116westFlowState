<template>
 <span class="navbar-text">
    <button
    @click="goTo('Sites')"
      class="btn selectable text-dark lighten-30 text-uppercase my-2 my-lg-0"
    >
      WordPress
    </button>
 </span>
</template>


<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter()
    return {
     goTo(page){
       router.push({
         name: page
       });
     }
    };
  },
};
</script>


<style lang="scss" scoped>

</style>