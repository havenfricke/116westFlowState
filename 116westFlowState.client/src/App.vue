<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <div class="bg-light text-dark text-center p-4">
      Made with love, by Haven Fricke 
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
@import url('https://fonts.googleapis.com/css2?family=Hind:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Hind:wght@300&family=Roboto+Condensed:wght@300&display=swap');

h1, h2, h3, h4, h5, h6, div {
  font-family: 'Hind', sans-serif
}
p, a, ul, li{
font-family: 'Hind', sans-serif;
font-family: 'Roboto Condensed', sans-serif;
}

</style>
