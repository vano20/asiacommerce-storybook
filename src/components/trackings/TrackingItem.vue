<template>
  <div class="tracking-item px-4 py-3 flex">
    <div class="tracking-node">
    </div>
    <div class="tracking-date">
      Oct, 03 2019 <span class="text-gray-600">14:23:19</span>
    </div>
    <div class="tracking-status">
      <p>
        On the way to port departure
      </p>
      <p>
        <span class="text-gray-500">Comment:</span>
        This is value of the comment.
      </p>
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
      top: 16px;
      z-index: 1;
      left: 20px;
    }
  }

  .tracking-node {
    @apply absolute w-3 h-3 rounded-full bg-gray-100 border-2 border-gray-500;
    z-index: 1;
    top:15px;
  }
</style>