<template>
 <span class="navbar-text">
 
    <button
    @click="goTo('Teams')"
      class="btn selectable text-dark lighten-30 text-uppercase my-2 my-lg-0"
    >
      Teams
    </button>
 
 </span>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';

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

<style scoped>
</style>