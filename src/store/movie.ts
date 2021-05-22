import { Module } from 'vuex';

export interface IMovieStoreState {
  isLoadInProgress: boolean;
  data: any;
}

export const mutationNames = {
  loadStarted: 'loadStarted',
  loadCompleted: 'loadCompleted',
};

export const createInitialState = (): IMovieStoreState => ({
  isLoadInProgress: false,
  data: {},
});

function createModule(): Module<IMovieStoreState, any> {
  const module = {
    namespaced: true,
    state: () => createInitialState(),
    mutations: {
      [mutationNames.loadStarted](state: IMovieStoreState): void {
        state.isLoadInProgress = true;
      },
      [mutationNames.loadCompleted](
        state: IMovieStoreState,
        payload: any
      ): void {
        state.isLoadInProgress = false;
        state.data = payload.data;
      },
    },
  };
  return module;
}

export { createModule };
