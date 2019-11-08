export const state = {
  sideBar: true,
  sideBarShrink: false,
};

export const getters = {
  getSideBar: state => {
    return state.sideBar;
  },
  getSideBarShrink: state => {
    return state.sideBarShrink;
  },
};

export const actions = {
  toggleSidebar({ state, commit }) {
    commit("TOGGLE_SIDE_BAR");
  },
  toggleSidebarShrink({ state, commit }) {
    commit("TOGGLE_SIDE_BAR_SHRINK");
  },
};

export const mutations = {
  TOGGLE_SIDE_BAR(state) {
    state.sideBar = !state.sideBar;
  },
  TOGGLE_SIDE_BAR_SHRINK(state) {
    state.sideBarShrink = !state.sideBarShrink;
  }
};
