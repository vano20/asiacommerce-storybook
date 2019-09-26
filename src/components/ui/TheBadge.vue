<template>
  <div
    class="badge" 
    :class="[
      variantClass, isPill ? 'rounded-full' : 'rounded-sm',
      sizeClass,
      { 'is-solid': isSolid }
    ]"
  >
    <slot>{{ title }}</slot>
  </div>
</template>

<script>
export default {
  name: "TheBadge",
  props: {
    title: {
      type: String,
      default: "Badge label here"
    },
    isPill: Boolean,
    isSolid: Boolean,
    variant: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: ""
    }
  },
  computed: {
    variantClass() {
      return "is-" + this.variant.toLowerCase();
    },
    sizeClass() {
      return "is-" + this.size.toLowerCase();
    }
  }
}
</script>

<style>
:root {
  --variant: primary, accent, warning, info, success, danger, pink;
  --size: sm,lg;
}

.badge {
  @apply bg-gray-200 inline-block text-gray-700 align-middle;
  margin-left: .1rem;
  margin-right: .1rem;
  padding: .06rem .3rem;

  svg {
    width: .75rem;
    height: .75rem;
  }

}

@each $variant in var(--variant) {
  .badge.is-$(variant) {
    color: theme(colors.$(variant).700);
    background-color: theme(colors.$(variant).200);

    &.is-solid {
      background-color: theme(colors.$(variant).500);
    }
  }
}

.badge.is-solid  {
  @apply text-white bg-gray-600;
}

@each $size in var(--size) {
  .badge.is-$(size) {
    font-size: theme(fontSize.$(size));
  }
}

.badge.is-small {
  @apply font-medium;
}
</style>