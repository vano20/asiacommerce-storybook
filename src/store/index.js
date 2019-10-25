import Vue from "vue";
import Vuex from "vuex";

import { state, actions, getters, mutations } from "./global";

import catalogs from "./modules/catalogs";
import product from "./modules/product";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    catalogs,
    product
  },
  state,
  actions,
  getters,
  mutations
});
