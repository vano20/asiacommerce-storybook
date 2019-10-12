<template>
  <div class="tracking-item px-4 py-3 flex items-center">
    <div class="tracking-node">
    </div>
    <div class="tracking-date">
      Oct, 03 2019
    </div>
    <div class="tracking-status">
      Departure
    </div>
    <div class="tracking-location">
      Beijing, CN
    </div>
  </div>
</template>

<script>
export default {
  name: "TrackingItem"
}
</script>

<style lang="css" scoped>
  .tracking-item {
    @apply relative;

    &:before {
      @apply w-1 bg-gray-500 h-full absolute;
      content: "";
      top: 50%;
      z-index: 1;
      left: 28px;
    }
  }

  .tracking-node {
    @apply absolute w-3 h-3 rounded-full bg-gray-100 border-2 border-gray-500 ml-2;
    z-index: 1;
  }
</style>