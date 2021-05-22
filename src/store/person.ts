import { Module } from 'vuex';

export interface IPersonStoreState {
  isLoadInProgress: boolean;
  data: any;
}

export const mutationNames = {
  loadStarted: 'loadStarted',
  loadCompleted: 'loadCompleted',
};

export const createInitialState = (): IPersonStoreState => ({
  isLoadInProgress: false,
  data: {},
});

function createModule(): Module<IPersonStoreState, any> {
  const module = {
    namespaced: true,
    state: () => createInitialState(),
    mutations: {
      [mutationNames.loadStarted](state: IPersonStoreState): void {
        state.isLoadInProgress = true;
      },
      [mutationNames.loadCompleted](
        state: IPersonStoreState,
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
