<template>
  <div>
    <SearchBox />
    <br />
    <SearchResults v-bind:query="query" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import SearchBox from '@/components/SearchBox.vue';
import SearchResults from '@/components/SearchResults.vue';

export default Vue.extend({
  name: 'Search',
  data: function () {
    return {
      query: this.$route.query.s,
    };
  },
  watch: {
    $route: function () {
      this.query = this.$route.query.s;
    },
  },
  components: {
    SearchBox,
    SearchResults,
  },
});
</script>
