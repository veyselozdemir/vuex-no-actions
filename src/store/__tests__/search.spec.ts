import {
  createModule,
  createInitialState,
  ISearchStoreState,
  mutationNames,
  getterNames,
} from '@/store/search';
import Vuex, { Store } from 'vuex';
import { createLocalVue } from '@vue/test-utils';

let store: Store<ISearchStoreState>;
createLocalVue().use(Vuex);

describe('search module', () => {
  beforeAll(() => {
    store = new Vuex.Store(createModule());
  });

  it('initializes the state data', () => {
    const initialState = createInitialState();
    expect(store.state).toEqual(initialState);
  });
});

describe('when search started', () => {
  beforeAll(() => {
    store = new Vuex.Store(createModule());
    store.commit(mutationNames.searchStarted);
  });
  it('sets search started flag', () => {
    expect(store.state.isSearchInProgress).toBeTruthy();
  });
  it('clears the search results', () => {
    expect(store.state.searchResults).toEqual({});
  });
});

describe('when search completed', () => {
  const sampleResultsObject = { results: [{ id: 1 }, { id: 2 }] };

  beforeEach(() => {
    store = new Vuex.Store(createModule());
    store.commit(mutationNames.searchCompleted, {
      results: sampleResultsObject,
    });
  });
  it('unsets the search started flag', () => {
    expect(store.state.isSearchInProgress).toBeFalsy();
  });
  it('sets the search results to the state', () => {
    expect(store.state.searchResults).toEqual(sampleResultsObject);
  });

  it('results count gives 2', () => {
    expect(store.getters[getterNames.resultsCount]).toBe(2);
  });
});
