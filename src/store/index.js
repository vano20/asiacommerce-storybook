import Vue from "vue";
import Vuex from "vuex";

import { state, actions, getters, mutations } from "./global";

import catalogs from "./modules/catalogs";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    catalogs
  },
  state,
  actions,
  getters,
  mutations
});
