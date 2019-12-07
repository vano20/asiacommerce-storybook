<template>
  <div v-if="shown" class="slidebar">
    <div class="slidebar-backdrop" />
    <div class="slidebar-inner">
      Slidebar here
    </div>
  </div>
</template>

<script>
export default {
  name: "SlideBar",
  props: {
    shown: {
      default: false,
      type: Boolean
    }
  }
};
</script>
