<template>
  <div>
    <form action="" v-on:submit="triggerSearch">
      <input type="text" id="searchBox" v-model="searchBoxText" class="input" />
      <button id="searchSubmitButton" class="button is-primary">Search</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data: function () {
    return {
      searchBoxText: '',
    };
  },
  methods: {
    triggerSearch: function (event: Event) {
      event.preventDefault();
      if (!this.searchBoxText) {
        return;
      }
      let encoded = encodeURIComponent(this.searchBoxText);
      this.$router.push({ name: 'Search', query: { s: encoded } });
    },
  },
});
</script>
