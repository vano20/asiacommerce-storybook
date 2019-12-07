<template>
  <div v-if="shown">
    Hello World
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
