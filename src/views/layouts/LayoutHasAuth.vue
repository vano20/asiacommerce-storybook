<template>
  <div class="layout has-auth-layout">
    <the-sidebar />
    <div class="main-container">
      <headroom>
        <the-navbar />
      </headroom>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import TheNavbar from "../../components/navbar/TheNavbar";
import { TheSidebar } from "../../components/sidebar";
import { headroom } from "vue-headroom";

export default {
  name: "LayoutHasAuth",
  components: {
    headroom,
    TheNavbar,
    TheSidebar
  }
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

.layout {

  --sidebar-width: 220px;
  @apply bg-gray-100;

  .sidebar {
    position: fixed;
    width: var(--sidebar-width);
  }

  main {
    margin-left: var(--sidebar-width);
  }
}
</style>
