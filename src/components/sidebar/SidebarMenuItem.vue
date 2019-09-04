<template>
  <div
    :class="['text-gray-500', {'is-active' : item.isActive}]"
  >
    <div
      v-if="item.isSeparator"
      class="sidebar-menu-separator"
    />
    <a
      v-else
      href=""
      class="block relative hover:text-gray-700 hover:bg-primary-100 px-4 py-3"
    >
      <sidebar-icon :icon="item.icon" />
      <!-- <base-icon class="w-4" :name="item.icon" :width="item.iconWidth" :height="item.iconHeight" /> -->
      <p class="inline-block px-1">{{ item.label }}</p>
    </a>
  </div>
</template>

<script>
import BaseIcon from "../ui/BaseIcon";
import SidebarIcon from "./SidebarIcon";

export default {
  name: "SidebarMenuItem",
  components: {
    BaseIcon,
    SidebarIcon
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    icon: {
      type: String
    }
  }
}
</script>

<style scoped>

.is-active {
  @apply rounded-r;

  & > a {
  @apply text-primary-500; 
    
    &:before {
      content: '';
      @apply bg-primary-400 w-1 h-full rounded-r absolute inset-y-0 left-0;
    }
  }
}

.sidebar-menu-separator {
  @apply h-10 border-b;
  border-bottom-color: theme(colors.gray.200).7;
}

</style>