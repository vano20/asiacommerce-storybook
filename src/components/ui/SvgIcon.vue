<template>
    <!-- v-html="require('!!html-loader!./../../assets/icons/' + this.icon + '.svg')" -->
  <div
    class="inline-block"
  >
  <a href="">
    <LogoFire />
    mbut
  </a>
  </div>
</template>

<script>
import LogoFire from "../../../src/assets/icons/fire.svg";
export default {
  name: "SvgIcon",
  components: {
    LogoFire
  },
  props: ['icon']
}
</script>

<style>
.svg {
    fill: currentColor;
    height: 1em;
    margin-top: -4px;
    vertical-align: middle;
    width: 1em;
}

</style>