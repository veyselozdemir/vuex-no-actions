<template>
  <article>
    <router-link :to="{ name: 'Person', query: { id: item.id } }">
      <img :src="profilePath" v-if="imageExists" />
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
        style="width: 220px; border: 1px solid gray"
        v-if="!imageExists"
      />
    </router-link>
    <div>
      <p>
        <router-link :to="{ name: 'Person', query: { id: item.id } }">
          <strong>{{ name }}</strong>
        </router-link>
        <br />
        <small>{{ item.popularity }}</small>
        <small>{{ item.known_for_department }} </small>
      </p>
      <p>{{ item.overview }}</p>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'PersonDisplayCard',
  props: {
    item: Object,
  },
  computed: {
    name() {
      const { name } = this.item;
      return name;
    },
    profilePath() {
      const { profile_path } = this.item;
      return `https://www.themoviedb.org/t/p/w220_and_h330_face/${profile_path}`;
    },
    imageExists() {
      const { profile_path } = this.item;
      return !!profile_path;
    },
  },
});
</script>
