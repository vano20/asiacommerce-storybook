<template>
  <div class="button-group" role="group">
    <slot />
  </div>
</template>

<script>

export default {
  name: "ButtonGroup"
}
</script>

<style>
.button-group {
  display: inline-flex;
  
  & > .btn,
  & > .btn-solid {
    @apply block rounded-none;
    margin-left: -1px;

    &:first-child {
      @apply rounded-l;
      margin-left: 0px;
    }

    &:last-child {
      @apply rounded-r;
    }
  }
}
</style>