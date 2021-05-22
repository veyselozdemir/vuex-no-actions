import { Module } from 'vuex';
export interface ISearchStoreState {
  isSearchInProgress: boolean;
  searchResults: any;
}

export const getterNames = {
  resultsCount: 'resultsCount',
};

export const mutationNames = {
  searchStarted: 'searchStarted',
  searchCompleted: 'searchCompleted',
};

export const createInitialState = (): ISearchStoreState => ({
  isSearchInProgress: false,
  searchResults: {},
});

function createModule(): Module<ISearchStoreState, any> {
  const module = {
    namespaced: true,
    state: () => createInitialState(),
    getters: {
      [getterNames.resultsCount]: (state: ISearchStoreState) =>
        (state.searchResults.results || []).length,
    },
    mutations: {
      [mutationNames.searchStarted](state: ISearchStoreState): void {
        state.isSearchInProgress = true;
        state.searchResults = {};
      },
      [mutationNames.searchCompleted](
        state: ISearchStoreState,
        payload: { results: any }
      ): void {
        state.isSearchInProgress = false;
        state.searchResults = payload.results;
      },
    },
  };
  return module;
}

export { createModule };
