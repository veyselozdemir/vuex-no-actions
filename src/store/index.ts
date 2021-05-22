import Vuex, { Store } from 'vuex';
import * as searchModule from './search';
import * as movieModule from './movie';
import * as personModule from './person';

export interface IRootState {}

const moduleNames = {
  search: 'search',
  movie: 'movie',
  person: 'person',
};

function createStore(): Store<IRootState> {
  const store = new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
  });

  store.registerModule(moduleNames.search, searchModule.createModule());
  store.registerModule(moduleNames.movie, movieModule.createModule());
  store.registerModule(moduleNames.person, personModule.createModule());
  return store;
}

export { moduleNames, createStore };
