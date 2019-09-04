<template>
  <div class="sidebar">
    <slot />
  </div>
</template>

<script>
export default {
  name: "TheSidebar"
}
</script>

<style scoped>
.sidebar {
  @apply shadow-lg h-screen;
  width: 220px;

}
</style>