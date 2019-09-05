<template>
  <component :is="importIcon" />
</template>

<script>
export default {
  name: "DynamicIcon",
  props: {
    icon: {
      type: String
    }
  },
  computed: {
    importIcon() {
      return () =>
        import(/* webpackChunkName: "icons" */
        /* webpackMode: "lazy-once" */
        `../../../src/assets/icons/${this.icon}.svg`);
    }
  }
};
</script>
