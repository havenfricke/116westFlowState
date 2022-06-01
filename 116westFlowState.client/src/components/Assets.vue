<template>
 <span class="navbar-text">
    <button
    @click="goTo('Assets')"
      class="btn selectable text-dark lighten-30 text-uppercase my-2 my-lg-0"

    >
      Assets
    </button>
 </span>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
    setup(){
      const router = useRouter()
        return{
          goTo(page){
            router.push({
              name: page
            });
          }
        };
    }
}

</script>

<style>
</style>