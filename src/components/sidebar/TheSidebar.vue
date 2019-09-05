<template>
  <div class="sidebar bg-white">
    <sidebar-menu-item
      v-for="(menu, idx) in this.$router.options.routes"
      :key="idx"
      :item="menu"
    />
    <!-- <sidebar-menu-item /> -->
    <!-- <li v-for="(route, idx) in this.$router.options.routes" :index="idx">
      <router-link :to="route.path">{{ route.title }}</router-link>
    </li> -->
  </div>
</template>

<script>
import SidebarMenuItem from "./SidebarMenuItem";
export default {
  name: "TheSidebar",
  components: {
    SidebarMenuItem
  }
};
</script>

<style lang="css" scoped>
.sidebar {
  margin-top:100px;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: white;
    top: -2px;
  }

  @apply h-screen;
  width: 220px;
  box-shadow: 2px 0 8px theme(colors.gray.500).08, 2px 0 2px theme(colors.gray.500).08;
}
</style>
