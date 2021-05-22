import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { createStore, moduleNames } from '@/store';
describe('store submodules', () => {
  createLocalVue().use(Vuex);
  const store = createStore();
  it('contain a search submodule', () => {
    const hasSearchModule = store.hasModule(moduleNames.search);
    expect(hasSearchModule).toBeTruthy();
  });
});
