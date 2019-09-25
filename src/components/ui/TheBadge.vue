<template>
  <div class="badge" :class="[variantClass, isPill ? 'rounded-full' : 'rounded-sm',]">
    <slot>{{ title }}</slot>
  </div>
</template>

<script>
export default {
  name: "TheBadge",
  props: {
    title: {
      type: String,
      default: "Badge label here"
    },
    isPill: Boolean,
    variant: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: ""
    }
  },
  computed: {
    variantClass() {
      return "is-" + this.variant.toLowerCase();
    },
    sizeClass() {
      return "is-" + this.size.toLowerCase();
    }
  }
}
</script>

<style>

</style>