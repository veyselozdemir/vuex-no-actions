import { ISearchStoreState } from '@/store/search';
import { createStore, IRootState } from '@/store/index';
import Vuex, { Store } from 'vuex';
import * as tmdbClient from '@/apiClients/tmdb-client';
import * as searchService from '@/services/searchService';
import { createLocalVue } from '@vue/test-utils';

let store: Store<IRootState>;
let tmdbClientMock: jest.SpyInstance;
createLocalVue().use(Vuex);
store = createStore();

describe('when searchAsync called', () => {
  const mockResults = { results: [{ id: 1 }, { id: 2 }] };

  beforeEach(async () => {
    tmdbClientMock = jest
      .spyOn(tmdbClient, 'searchAsync')
      .mockReturnValue(Promise.resolve(mockResults));

    await searchService.searchAsync(store.commit, 'sample query');
  });

  it('sets the searchResults data with the api response', () => {
    const { search: searchModuleState } = store.state as any;
    expect(searchModuleState.searchResults).toEqual(mockResults);
  });
  // it('raises the loading flag', () => {});
  // it('clears the loading flag when search is completed', () => {});
});
