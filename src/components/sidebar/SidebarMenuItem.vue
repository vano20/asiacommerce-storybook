<template>
  <!-- <div v-if="item.isSeparator" class="sidebar-menu-separator" /> -->
  <!-- v-else -->
  <router-link
    :to="item.path"
    class="text-gray-500 block relative hover:text-gray-700 hover:bg-primary-100 px-4 py-3"
  >
    <dynamic-icon :icon="item.icon" />
    <span class="inline-block pl-2">{{ item.title }}</span>
  </router-link>
</template>

<script>
import DynamicIcon from "../ui/DynamicIcon";

export default {
  name: "SidebarMenuItem",
  components: {
    DynamicIcon
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="css" scoped>

.router-link-exact-active {
  @apply rounded-r;

  @apply text-primary-500;
    &:before {
      content: '';
      @apply bg-primary-400 w-1 h-full rounded-r absolute inset-y-0 left-0;
    }
}

.sidebar-menu-separator {
  @apply h-10 border-b;
  border-bottom-color: theme(colors.gray.200).7;
}
</style>
