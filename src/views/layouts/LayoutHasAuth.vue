<template>
  <div class="layout has-auth-layout" :class="getSideBarState">
    <headroom>
      <the-navbar />
    </headroom>
    <div class="flex">
      <div class="flex-none bg-white z-10" style="width: 220px;">
        <affix
          class="sidebar-menu"
          scroll-affix
          relative-element-selector="#main-container"
          :offset="{ top:0, bottom: 20 }"
        >
          <the-sidebar />
        </affix>
      </div>
      <div class="flex-auto">
        <div class="main-container container mx-auto px-4" id="main-container">
          <main>
            <router-view />
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheNavbar from "../../components/navbar/TheNavbar";
import { TheSidebar } from "../../components/sidebar";
import { headroom } from "vue-headroom";

import { mapGetters } from "vuex";

// import StickySidebar from "sticky-sidebar";

export default {
  name: "LayoutHasAuth",
  components: {
    headroom,
    TheNavbar,
    TheSidebar
  },
  watch: {
    sideBar() {
      console.log("sidebar state change", this.sideBar);
    }
  },
  computed: {
    ...mapGetters({
      sideBar: "getSideBar"
    }),
    getSideBarState() {
      return this.sideBar ? "sidebar-open" : "sidebar";
    }
  }
  // beforeCreate () {
  //   var sidebar = new this.$StickySidebar('#the-sidebar', {
  //     containerSelector: '.layout',
  //     innerWrapperSelector: '.inner',
  //     topSpacing: 20,
  //     bottomSpacing: 20
  //   });
  //   console.log(this.$StickySidebar ? 'StickySidebar works!' : 'Uh oh..');
  // }
};
</script>

<style>
html,
body {
  background-color: theme(colors.gray.100);
}
</style>
<style lang="css" scoped>

:root {
  /* --sidebar-width: 220px; */
}

.headroom--top {
  /* position: fixed; */
}

.headroom--pinned ~ .sidebar-menu {
  background: #000;
}

.sidebar-menu {

  &.affix-top {
    /* margin-top: -48px; */
  }
  /* margin-top: -48px;


  &.affix {
    margin-top: 0;
  } */
}

.layout {

  --sidebar-width: 220px;
  @apply bg-gray-100;

  .sidebar {
    /* position: fixed; */
    width: var(--sidebar-width);
  }

  main {
    /* margin-left: var(--sidebar-width); */
  }
}
</style>
