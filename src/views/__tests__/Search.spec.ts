import { createLocalVue, shallowMount, Wrapper } from '@vue/test-utils';
import Search from '@/views/Search.vue';
import SearchResults from '@/components/SearchResults.vue';
import VueRouter from 'vue-router';

it('sanity', () => {
  expect(true).toBe(true);
});
describe('Search view', () => {
  let wrapper: Wrapper<any>;
  let queryText: String;
  beforeEach(() => {
    const localVue = createLocalVue();
    queryText = `query ${Date.now()}`;
    localVue.use(VueRouter);
    const router = new VueRouter({
      routes: [
        {
          path: '/search',
          name: 'search',
          component: Search,
        },
      ],
    });
    router.push({ name: 'search', query: { s: <any>queryText } });
    wrapper = shallowMount(Search, { localVue, router });
  });
  it('sets the query property of SearchResults component from the querystring', () => {
    const resultsComponent = wrapper.findComponent(SearchResults);
    expect(resultsComponent.attributes('query')).toBe(queryText);
  });

  describe('when a second search is made', () => {
    const queryText2 = `query 2 ${Date.now()}`;
    beforeEach(() => {
      wrapper.vm.$router.push({
        name: 'search',
        query: { s: <any>queryText2 },
      });
    });

    it('sets the query property of SearchResults component again', () => {
      const resultsComponent = wrapper.findComponent(SearchResults);
      expect(resultsComponent.attributes('query')).toBe(queryText2);
    });
  });
});
