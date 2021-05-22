<template>
  <div data-test-id="resultCard" class="boxx">
    <MovieDisplayCard v-if="isMovie" :item="item" />
    <PersonDisplayCard v-if="isPerson" :item="item" />
    <hr />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MovieDisplayCard from './MovieDisplayCard.vue';
import PersonDisplayCard from './PersonDisplayCard.vue';

export default Vue.extend({
  name: 'ResultItemDisplayCard',
  props: {
    item: Object,
  },
  components: {
    MovieDisplayCard,
    PersonDisplayCard,
  },
  computed: {
    isMovie() {
      const item = this.item;
      return item.media_type === 'movie';
    },
    isPerson() {
      const item = this.item;
      return item.media_type === 'person';
    },
    // tmdb returns more media types than just person and movie
    // however this app supports just these two at the moment
  },
});
</script>
