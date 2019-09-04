<template>
  <div
    class="message mb-2 px-3 py-2 shadow-md border border-gray-100 border-l-2 rounded-sm relative"
    :class="[variantClass]"
  >
  <button
    v-if="closable"
    class="delete"
  />
  <div
    v-if="$slots.header"
    class="message-header text-lg"
  >
    <slot name="header" />
  </div>

  <p class="message-content">
    <slot />
  </p>

  </div>
</template>

<script>
export default {
  name: "AppMessage",
  props: {
    variant: { type: String, default: "default" },
    closable: { default: false, type: Boolean },
  },
  computed: {
    variantClass () {
      return 'is-' + this.variant.toLowerCase()
    },
  }
}
</script>

<style scoped>

.message {
    border-left-color: theme(colors.gray.500);
    color: theme(colors.gray.600);

    &:before {
      content: '';
      position: absolute;
      height: 5px;
      width: 5px;
      border-width: 5px;
      border-style: solid;
      border-color: theme(colors.gray.500) transparent transparent theme(colors.gray.500);
      top: 0;
      left: 0;
    }

  &-header {
    @apply mr-1;

    + .message-content {
      @apply mt-1;
    }

  }

  &-content {
    @apply mr-1;
  }

  & .close,
  & .delete {
    position: absolute;
    right: 2px;
    top: 2px;

  }
}

@each $variant in primary, success, info, accent, danger {

  .message {

    &.is-$(variant) {
      color: theme(colors.$(variant).500);
      border-left-color: theme(colors.$(variant).500);

      &:before {
        border-color: theme(colors.$(variant).500) transparent transparent theme(colors.$(variant).500);
      }
    }
  }

}


</style>