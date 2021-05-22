<template>
  <div>
    <SearchBox />
    <router-link :to="{ name: 'Search' }">Back to search</router-link>
    <br />
    <progress max="100" v-show="isLoadInProgress"></progress>
    <div v-if="!isLoadInProgress">
      <h1>{{ personInfo.name }}</h1>
      <h2>
        {{ personInfo.known_for_department }}
      </h2>
      <article>
        <img :src="posterPath" :alt="personInfo.name" />
        <div>
          <p>
            {{ alternativeNames }}
            <br />
            <small
              >{{ personInfo.place_of_birth }}, {{ personInfo.birthday }}</small
            >
          </p>
          <p>
            {{ personInfo.biography }}
          </p>
        </div>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import { moduleNames } from '@/store';
import { mapState } from 'vuex';
import { IPersonStoreState } from '@/store/person';
import Vue from 'vue';
import SearchBox from '@/components/SearchBox.vue';
import * as personService from '@/services/personService';

export default Vue.extend({
  name: 'Person',
  async mounted() {
    await this.loadPerson();
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
    ...mapState<IPersonStoreState>(moduleNames.person, {
      isLoadInProgress: (state: IPersonStoreState) => state.isLoadInProgress,
      personInfo: (state: IPersonStoreState) => state.data,
      posterPath: (state: IPersonStoreState) => {
        const { profile_path } = state.data;
        if (!profile_path) {
          return '';
        }
        return `https://www.themoviedb.org/t/p/w220_and_h330_face/${profile_path}`;
      },
      alternativeNames: (state: IPersonStoreState) => {
        const { also_known_as } = state.data;
        return also_known_as ? also_known_as.join(', ') : '';
      },
    }),
  },
  methods: {
    async loadPerson() {
      await personService.getPersonAsync(this.$store.commit, this.id);
    },
  },
  components: {
    SearchBox,
  },
});
</script>
