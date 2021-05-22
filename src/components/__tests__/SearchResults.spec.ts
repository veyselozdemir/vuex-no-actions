import { createLocalVue, shallowMount, Wrapper } from '@vue/test-utils';
import Vuex from 'vuex';
import { createInitialState } from '@/store/search';

import SearchResults from '../SearchResults.vue';
import { moduleNames } from '@/store';
import * as sampleApiResponse from './seach-multi-sample-response.json';

describe('when mounted', () => {
  it('tests work', () => {
    expect(true).toBeTruthy();
  });

  const localVue = createLocalVue();
  localVue.use(Vuex);

  const searchModule = {
    namespaced: true,
    state: () => createInitialState(),
  };
  let wrapper: Wrapper<any>;

  const testQuery = `test query ${Date.now()}`;

  beforeEach(() => {
    const store = new Vuex.Store({});
    store.registerModule(moduleNames.search, searchModule);

    wrapper = shallowMount(SearchResults, {
      propsData: {
        query: testQuery,
      },
      localVue,
      store,
    });
  });
});

describe('when search is in progress', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);

  const searchModule = {
    namespaced: true,
    state: () => ({
      ...createInitialState(),
      isSearchInProgress: true,
    }),
  };
  let wrapper: Wrapper<any>;

  beforeEach(() => {
    const store = new Vuex.Store({});
    store.registerModule(moduleNames.search, searchModule);

    wrapper = shallowMount(SearchResults, {
      localVue,
      store,
    });
  });

  it(`displays the search in progress text`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('when there are search results', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);

  const searchModule = {
    namespaced: true,
    state: () => ({
      ...createInitialState(),
      isSearchInProgress: false,
      searchResults: sampleApiResponse,
    }),
  };
  let wrapper: Wrapper<any>;

  beforeEach(() => {
    const store = new Vuex.Store({});
    store.registerModule(moduleNames.search, searchModule);

    wrapper = shallowMount(SearchResults, {
      localVue,
      store,
    });
  });

  it(`displays the search results`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
