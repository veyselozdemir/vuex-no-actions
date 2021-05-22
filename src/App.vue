<template>
  <div id="app">
    <div class="container">
      <div class="column is-10 is-offset-1">
        <Navbar />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from '@/components/Navbar.vue';
export default Vue.extend({
  components: {
    Navbar,
  },
});
</script>
