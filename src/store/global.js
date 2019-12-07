export const state = {
  sideBar: true,
  sideBarShrink: false,
  slideBar: false
};

export const getters = {
  getSideBar: state => {
    return state.sideBar;
  },
  getSideBarShrink: state => {
    return state.sideBarShrink;
  },
  getSlideBar: state => state.slideBar
};

export const actions = {
  toggleSidebar({ state, commit }) {
    commit("TOGGLE_SIDE_BAR");
  },
  toggleSidebarShrink({ state, commit }) {
    commit("TOGGLE_SIDE_BAR_SHRINK");
  }
};

export const mutations = {
  TOGGLE_SIDE_BAR(state) {
    state.sideBar = !state.sideBar;
  },
  TOGGLE_SIDE_BAR_SHRINK(state) {
    state.sideBarShrink = !state.sideBarShrink;
  },
  TOGGLE_SLIDE_BAR(state) {
    state.slideBar = !state.slideBar;
  }
};
