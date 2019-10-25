// import ProductServices from "../../services/product";

export default {
  namespaced: true,
  state: {
    tabSelected: "product"
  },
  mutations: {
    SET_TAB_SELECTED(state, payload) {
      state.tabSelected = payload;
    }
  }
}
