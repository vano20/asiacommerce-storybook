<template>
  <div class="button-group" role="group">
    <slot />
  </div>
</template>

<script>
export default {
  name: "ButtonGroup"
};
</script>

<style lang="css">
.button-group {
  display: inline-flex;
  & > .btn,
  & > .btn-solid,
  & > .buttonize {
    @apply block rounded-none;
    margin-left: -1px;

    &:hover {
    }

    & > .btn {
      @apply border-none;
      border-width: 1px 0;
    }

    &:first-of-type,
    &:first-of-type .btn {
      @apply rounded-l;
      margin-left: 0px;
    }

    &:last-of-type,
    &:last-of-type .btn {
      @apply rounded-r;
    }
  }
}
</style>
