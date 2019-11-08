<template>
  <!-- <div v-if="item.isSeparator" class="sidebar-menu-separator" /> -->
  <!-- v-else -->
  <div class="sidebar-menu-item">
    <router-link
      :to="item.path"
      :data-wenk="item.title"
      data-wenk-pos="right"
      class="text-gray-600 block relative hover:text-gray-700 hover:bg-primary-100 px-4 py-3"
    >
      <dynamic-icon class="sidebar-menu-item-icon" :icon="item.icon" />
      <div class="inline-block pl-2 sidebar-menu-item-title">{{ item.title }}</div>
      <!-- <template v-else>
        <span>
          <dynamic-icon :icon="item.icon" />
        </span>
        <ul>
          <li>
            <a href="">
              {{ item.title }}
            </a>
          </li>
        </ul>
      </template> -->
    </router-link>
  </div>
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
