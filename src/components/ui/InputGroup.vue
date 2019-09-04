<template>
  <div class="input-group">
    <div
      v-if="$slots.prepend"
      :class="['input-group-prepend', {'icon-inside':iconInside}]"
    >
      <slot name="prepend" />
    </div>
    <slot />
    <div
      v-if="$slots.append"
      class="input-group-append"
    >
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
}
</script>

<style>
.input-group {
  @apply flex relative items-stretch w-full;

  & > &-prepend {
    @apply flex items-center;
    margin-right: -1px;
    z-index: 1;

    & > .btn,
    & > .btn-solid {
      @apply rounded-r-none;
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
    @apply flex items-center;
    margin-left: -1px;
    z-index: 1;
    

    & > .btn,
    & > .btn-solid {
      @apply rounded-l-none;
    }
  }

  .icon-inside {

    svg {
      @apply text-gray-400 absolute flex self-center ml-2 z-10;
    }

    + input {
      @apply rounded-l pl-8;
    }
  }
}
</style>