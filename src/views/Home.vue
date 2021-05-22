<template>
  <div>
    <SearchBox />
    <p>Go ahead and make a search</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import SearchBox from '@/components/SearchBox.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    SearchBox,
  },
});
</script>
