export const state = {
  sideBar: false
};

export const getters = {
  getSideBar: state => {
    return state.sideBar;
  }
};

export const actions = {
  toggleSidebar({ state, commit }) {
    commit("TOGGLE_SIDE_BAR");
  }
};

export const mutations = {
  TOGGLE_SIDE_BAR(state) {
    state.sideBar = !state.sideBar;
  }
};
