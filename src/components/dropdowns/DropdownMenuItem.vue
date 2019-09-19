<template>
  <component
    class="dropdown-item"
    :is="wrapType"
    :href="href"
    @click="callback($event)"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: "DropdownMenuItem",
  props: {
    href: {
      type: String,
      default: null
    }
  },
  computed: {
    wrapType() {
      if (this.href) {
        return "a";
      } else {
        return "div";
      }
    },
  },
  methods: {
    callback: function(e) {
      this.$emit("click", e);
    }
  },
}
</script>

<style lang="css" scoped>

.dropdown-item {
  @apply block px-4 py-2 relative;

  &:hover {
    @apply no-underline;
    background-color: theme(colors.primary.100).7;
  }
}

</style>
