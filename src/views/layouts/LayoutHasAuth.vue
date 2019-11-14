<template>
  <div class="layout has-auth-layout" :class="{'sidebar-show' : sideBar, 'sidebar-shrink' : !sideBarShrink}">
    <headroom>
      <the-navbar />
    </headroom>
    <div class="flex">
      <transition name="slide-left">
        <div class="flex-none bg-white z-10 sidebar-wrapper" v-show="sideBar">
          <affix
            class="sidebar-menu"
            scroll-affix
            relative-element-selector="#main-container"
            :offset="{ top:0, bottom: 0 }"
          >
            <the-sidebar />
          </affix>
        </div>
      </transition>
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
    },
    sideBarShrink() {
      console.log("sidebar shrink state change", this.sideBarShrink);
    }
  },
  computed: {
    ...mapGetters({
      sideBar: "getSideBar",
      sideBarShrink: "getSideBarShrink"
    }),

    sidebarHideShow() {
      return this.sideBar ? "sidebar-show" : "sidebar-hide";
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
.slide-left-enter-active, .slide-left-leave-active {
  transition: all .08s ease-in-out;
  /* background: #000; */
}
.slide-left-enter, .slide-left-leave-to /* .fade-leave-active below version 2.1.8 */ {
  /* opacity: 0; */
  transform: translateX(-100%);
}

.slide-left-leave-to {
  /* background: red; */
}


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

  >>> .sidebar-main {
    /* background: orange; */
    min-height: calc(100vh - 114px);
  }


  &.affix {
    
    >>> .sidebar-main {
      /* min-height: calc(100vh - 48px); */
      /* background: red; */
    }
  }
  
  &.affix-top {
    /* margin-top: -48px; */

    >>> .sidebar-main {
      /* min-height: calc(100vh - 92px); */
    }
  }

}

.layout {

  --sidebar-width: 220px;
  --sidebar-shrink-width: 64px;
  @apply bg-gray-100;

  &.sidebar-show {
    .sidebar,
    .sidebar-wrapper {
      width: var(--sidebar-width);
    }
    >>> .sidebar-menu-item > [data-wenk] {
      &:after {
        display: none;
      }
    }
  }

  &.sidebar-shrink {
    .sidebar,
    .sidebar-wrapper {
      width: var(--sidebar-shrink-width);
    }
    >>> .sidebar-menu-item {
      @apply text-center;

      > [data-wenk] {
        &:after {
          display: block;
        }
      }
    }
    >>> .sidebar-menu-item-title {
      display: none;
    }
    >>> .sidebar-main {
      min-height: calc(100vh - 160px);

      .sidebar-avatar {
        .avatar-text {
          @apply absolute bg-gray-100 p-4;
          min-width: 200px;
          top: -1000px;
          left: 60px;
          box-shadow: 2px 0 8px 2px theme(colors.gray.500).08, 2px 0 2px theme(colors.gray.500).08;
          
        }

        &:hover {

          .avatar-text {
            top: 0;
            transition: top .08s;
          }
        }
      }
    }
    >>> .sidebar-switch-wrapper {
      /* top: auto; bottom: auto; left: 10px; */
      position: relative;
      margin-left: 9px;
    }
  }
    
  
  /* &.sidebar-show {
    .sidebar-wrapper {
      width: var(--sidebar-shrink-width);
    }
  } */

  main {
    /* margin-left: var(--sidebar-width); */
  }
}

.headroom--not-top.headroom--pinned ~ .sidebar-wrapper {
  background: blue;
}
</style>
