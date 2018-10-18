import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lastRouteMetaIndexes: {
      from: null,
      to: null
    }
  },
  mutations: {
    setRouteMetaIndexes(state, payload = { from, to }) {
      state.lastRouteMetaIndexes = payload;
    }
  },
  actions: {},
  getters: {
    getLastRouteMetaIndexes: state => state.lastRouteMetaIndexes
  }
});
