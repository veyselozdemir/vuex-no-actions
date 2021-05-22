import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router';
import { createStore } from './store';

import './assets/main.scss';

Vue.use(Vuex);

Vue.config.productionTip = false;
const store = createStore();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
