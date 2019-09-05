<template>
  <div class="layout has-auth-layout">
    <the-navbar />
    <div class="container">
      <the-sidebar />
      <main>
        <slot />
      </main>
    </div>
  </div>
</template>

<script>
import TheNavbar from "../components/navbar/TheNavbar";
import { TheSidebar } from "../components/sidebar/sidebar";

export default {
  name: "LayoutHasAuth",
  components: {
    TheNavbar,
    TheSidebar
  }
};
</script>

<style scoped>
.layout-wrapper {
  @apply bg-gray-100;
}
</style>
