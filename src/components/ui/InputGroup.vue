<template>
  <div class="input-group">
    <div
      v-if="$slots.prepend"
      :class="['input-group-prepend', { 'icon-inside': iconInside }]"
    >
      <slot name="prepend" />
    </div>
    <slot />
    <div v-if="$slots.append" class="input-group-append">
      <slot name="append" />
    </div>
  </div>
</template>

<script>
export default {
  name: "InputGroup",
  props: {
    iconInside: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="css">
.input-group {
  @apply flex relative items-center w-full;

  & > &-prepend {
    @apply flex-none items-center;
    margin-right: -1px;
    z-index: 1;

    & > .btn,
    & > .btn-solid {
      @apply rounded-r-none;
    }

    & > .select > select {
      @apply rounded-l outline-none;
      padding-top: .3rem;

      &:focus {
        z-index: 1;
      }
    }
  }

  & > input {
    @apply relative flex-auto rounded-none;
    width: 1%;

    &:first-child {
      @apply rounded-l;
    }

    &:last-child {
      @apply rounded-r;
    }

    &:focus {
      z-index: 1;
    }

  }
  &:hover,
  &:active {

    .icon-inside {

      svg {
        @apply text-gray-500;
      }
    }
  }

  & > &-append {
    @apply flex-none items-center;
    margin-left: -1px;
    z-index: 1;

    & > .btn,
    & > .btn-solid {
      @apply rounded-l-none;
    }
  }

  .icon-inside {
    svg {
      @apply text-gray-400 absolute self-center ml-2 z-10;
      transform: translateY(-50%);
    }

    + input {
      @apply rounded-l pl-8;
    }
  }
}
</style>
