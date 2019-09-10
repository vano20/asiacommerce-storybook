import Vue from "vue";
import Vuex from "vuex";

import catalogs from "./modules/catalogs";

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    catalogs
  }
});
