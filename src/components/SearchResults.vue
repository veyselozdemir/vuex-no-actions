<template>
  <div>
    <progress max="100" v-show="isSearchInProgress"></progress>
    <div v-show="resultsCount === 0 && !isSearchInProgress">
      go ahead and make a search
    </div>
    <div data-test-id="searchResults">
      <div v-for="item in searchResults" v-bind:key="item.id">
        <ResultItemDisplayCard :item="item" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapState } from 'vuex';
import { ISearchStoreState, getterNames } from '@/store/search';
import { moduleNames } from '@/store';
import ResultItemDisplayCard from './ResultItemDisplayCard.vue';
import * as searchService from '@/services/searchService';

export default Vue.extend({
  async mounted() {
    await this.searchAsync();
  },
  components: {
    ResultItemDisplayCard,
  },
  computed: {
    ...mapState<ISearchStoreState>(moduleNames.search, {
      searchResults: (state: ISearchStoreState) => state.searchResults.results,
      isSearchInProgress: (state: ISearchStoreState) =>
        state.isSearchInProgress,
    }),
    ...mapGetters(moduleNames.search, [getterNames.resultsCount]),
  },
  props: {
    query: String,
  },
  watch: {
    query: 'searchAsync',
  },
  methods: {
    async searchAsync() {
      await searchService.searchAsync(this.$store.commit, this.query);
    },
  },
});
</script>
