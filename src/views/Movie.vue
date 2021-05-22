<template>
  <div>
    <SearchBox />
    <router-link :to="{ name: 'Search' }">Back to search</router-link>
    <br />
    <progress max="100" v-show="isLoadInProgress"></progress>
    <div v-if="!isLoadInProgress">
      <h1>{{ movieInfo.original_title }}</h1>
      <h2>{{ movieInfo.title }}</h2>
      <article>
        <img :src="posterPath" :alt="movieInfo.original_title" />
        <div>
          <p>
            {{ movieInfo.tagline }}
            <br />
            <small>{{ movieInfo.release_date }}</small>
          </p>
          <p>
            {{ movieInfo.overview }}
          </p>
        </div>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import { moduleNames } from '@/store';
import { mapState } from 'vuex';
import { IMovieStoreState } from '@/store/movie';
import Vue from 'vue';
import SearchBox from '@/components/SearchBox.vue';
import * as movieService from '@/services/movieService';

export default Vue.extend({
  name: 'Movie',
  async mounted() {
    await this.loadMovie();
  },
  data: function () {
    return {
      id: this.$route.query.id as string,
    };
  },
  watch: {
    $route: function () {
      this.id = this.$route.query.id as string;
    },
  },
  computed: {
    ...mapState<IMovieStoreState>(moduleNames.movie, {
      isLoadInProgress: (state: IMovieStoreState) => state.isLoadInProgress,
      movieInfo: (state: IMovieStoreState) => state.data,
      posterPath: (state: IMovieStoreState) => {
        const { poster_path } = state.data;
        if (!poster_path) {
          return '';
        }
        return `https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`;
      },
    }),
  },
  methods: {
    async loadMovie() {
      await movieService.getMovieAsync(this.$store.commit, this.id);
    },
  },
  components: {
    SearchBox,
  },
});
</script>
