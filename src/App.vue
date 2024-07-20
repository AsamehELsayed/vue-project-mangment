<script setup>

</script>

<template>
  <Nav/>
  <RouterView />
</template>
<script>
  import { RouterLink, RouterView } from 'vue-router'
import Nav from './components/Navbar.vue'
export default {
  components:{Nav},
  setup() {
    
  },
}
</script>
<style scoped>

</style>
