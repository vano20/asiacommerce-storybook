<template>
        <!-- v-if="idx === 2" -->
  <div class="sidebar bg-white z-20">
    <div class="sidebar-main">
      <!-- <navbar-brand /> -->
      <div class="bg-gray-100 p-4 flex items-center">
        <div class="flex-none">
          <figure class="w-8 ">
            <img class="rounded-full" src="https://avatars0.githubusercontent.com/u/1776866?s=460&v=4" alt="">
          </figure>
        </div>
        <div class="flex-auto pl-2">
          <p class="text-sm text-gray-400 leading-tight">Premium member</p>
          <p class="leading-tight">Nanang Budi Utomo</p>
        </div>
      </div>
      <div class="h-2" />
      <sidebar-menu-item
        v-for="(item, idx) in routes.slice(0, 4)"
        :key="idx"
        :item="item"
        :sidebarswitch="sidebarSwitch"
      />
      <div 
        class="h-6 border-b border-gray-200"
      />
      <sidebar-menu-item
        v-for="(item, idx) in routes.slice(4, 5)"
        :key="idx + 223"
        :item="item"
        :sidebarswitch="sidebarSwitch"
      />
      <!-- <sidebar-menu-item /> -->
      <!-- <li v-for="(route, idx) in this.$router.options.routes" :index="idx">
        <router-link :to="route.path">{{ route.title }}</router-link>
      </li> -->
      <div 
        class="h-6 border-b border-gray-200"
      />
    </div>
    <div class="sidebar-footer">
      <div class="relative">

        <sidebar-menu-item
          v-for="(item, idx) in routes.slice(5)"
          :key="idx + 112"
          :item="item"
          :sidebarswitch="sidebarSwitch"
        />
        <div
          class="absolute inset-y-0 right-0 py-3 px-2"
          data-wenk="Shrink sidebar"
          data-wenk-pos="top"
        >
          <the-switch
            v-model="sidebarSwitch"
            @click="toggleSidebarShrink"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarMenuItem from "./SidebarMenuItem";
import NavbarBrand from "../navbar/NavbarBrand";
import TheSwitch from "../ui/TheSwitch";
import mainRoutes from "../../router/main-routes"
import { mapActions } from "vuex";

export default {
  name: "TheSidebar",
  components: {
    SidebarMenuItem,
    NavbarBrand,
    TheSwitch
  },
  methods: {
    ...mapActions({
      toggleSidebar: "toggleSidebar"
    })
  },
  data: () => ({
    routes: mainRoutes,
    sidebarSwitch: false
  })
};
</script>

<style lang="css" scoped>
.sidebar {
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: white;
    top: -2px;
  }

  box-shadow: 2px 0 8px theme(colors.gray.500).08, 2px 0 2px theme(colors.gray.500).08;
}
</style>
