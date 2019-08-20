<template>
  <svg class="icon">
    <use :xlink:href="src"></use>
  </svg>
</template>

<script>
export default {
  name: "SIcon",
  props: ['icon'],
  computed: {
    src() {
      return require('../assets/icons/' + this.icon + '.svg')
    }
  }
}
</script>

<style>
.icon {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  fill: red;
}
</style>