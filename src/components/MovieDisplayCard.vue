<template>
  <article>
    <router-link :to="{ name: 'Movie', query: { id: item.id } }">
      <img :src="posterPath" v-if="imageExists" />
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
        style="width: 220px; border: 1px solid gray"
        v-if="!imageExists"
      />
    </router-link>
    <div>
      <p>
        <router-link :to="{ name: 'Movie', query: { id: item.id } }">
          <strong>{{ title }}</strong>
        </router-link>
        <br />
        <small>{{ item.release_date }}</small>
        <small>{{ item.vote_average }} ({{ item.vote_count }} votes)</small>
      </p>
      <p>{{ item.overview }}</p>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'MovieDisplayCard',
  props: {
    item: Object,
  },
  computed: {
    title() {
      const item = this.item;
      return (
        item.original_title || item.original_name || item.title || item.name
      );
    },
    posterPath() {
      const { poster_path } = this.item;
      return `https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`;
    },
    imageExists() {
      const { poster_path } = this.item;
      return !!poster_path;
    },
  },
});
</script>
