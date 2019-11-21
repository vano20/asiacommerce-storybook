<template>
  <component
    :class="[
      'btn ' + variantClass,
      sizeClass,
      isPill ? 'rounded-full' : 'rounded',
      { 'w-full': isFullwidth },
      { 'is-link': isLink },
      { 'is-solid': isSolid }
    ]"
    :is="wrapType"
    :href="href"
    @click="callback($event)"
  >
    <slot>Button</slot>
  </component>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    type: {
      type: String,
      default: null
    },
    href: {
      type: String,
      default: null
    },
    isSolid: {
      type: Boolean,
      default: false
    },
    isPill: {
      type: Boolean,
      default: false
    },
    isLink: {
      type: Boolean,
      default: false
    },
    isFullwidth: {
      type: Boolean,
      default: false
    },
    variant: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "medium"
    }
  },
  methods: {
    callback: function(e) {
      this.$emit("click", e);
    }
  },
  computed: {
    wrapType() {
      if (this.href) {
        return "a";
      } else {
        return "button";
      }
    },
    variantClass() {
      if (this.variant.length) {
        return "is-" + this.variant.toLowerCase();
      } else {
        return "";
      }
    },
    sizeClass() {
      return "is-" + this.size.toLowerCase();
    }
  }
};
</script>

<style lang="css">


/* @import "../../assets/styles/variables-base.css"; */

/* :root {
	--button-variant: (
		sm: 576px,
		md: 768px,
		lg: 992px,
		xl: 1200px
	);
} */

.btn {
  @apply border bg-white inline-block border-gray-400 text-gray-700 cursor-pointer
  ;
  transition: all .08s ease-in-out;

  &:hover,
  &.is-hover {
    @apply border-gray-500 text-gray-800 no-underline;
    box-shadow: 0 3px 6px theme(colors.gray.500).1, 0 2px 3px theme(colors.gray.500).2;
    background-color: theme(colors.gray.200).55;
  }

  &:active,
  &.is-active {
    @apply relative;
    box-shadow: 0 0 1px 0 theme(colors.gray.600).1, 0 0 1px 2px theme(colors.gray.500).1;
  }

  &.is-focus {
    @apply bg-primary-100 text-primary-500 border-gray-500 relative;
    &:hover {
      box-shadow: 0 0 1px 0 theme(colors.gray.600).1, 0 0 5px 2px theme(colors.gray.500).1;
    }
    outline: none;
  }

  &.is-solid {
    @apply text-white bg-gray-600 border-gray-600;

    &:hover {
      /* background-color: theme(colors.gray.600).9;
      border-color: theme(colors.gray.600).9; */
      opacity: .9;
    }

    &:active {
      opacity: 1;
    }
  }
}

.is-link {
  @apply border-none;
  color: theme(colors.primary.500);

  &:hover {
    @apply shadow-none text-primary-600;
  }
}

.btn {
  &:focus {
    outline: none;
  }
}


@each $variant in primary, success, accent, info, warning, danger {

  .btn.is-$(variant) {
    color: theme(colors.$(variant).500);
    border-color: theme(colors.$(variant).500);

    &:hover {
      background-color: theme(colors.$(variant).100);
      box-shadow: 0 3px 6px theme(colors.$(variant).500).1, 0 2px 3px theme(colors.$(variant).500).2;
    }

    &:active {
      box-shadow: 0 0 1px 0 theme(colors.$(variant).600).1, 0 0 1px 2px theme(colors.$(variant).500).1;
    }
  }

  .btn.is-solid.is-$(variant) {
    color: white;
    background-color: theme(colors.$(variant).500);
    border-color: theme(colors.$(variant).500);

    &:hover {
      /* background-color: theme(colors.$(variant).500).9;
      border-color: theme(colors.$(variant).500).9; */
      opacity: .9;
    }

    &:active {
      opacity: 1;
    }
  }
}


@each $size, $alias in (small, medium, large, huge), (sm, base, lg, xl) {
  @if $size == small {
    .btn.is-$(size) {
      /* @apply px-2; */
      padding-left: .3rem;
      padding-right: .3rem;
      padding-top: .1rem;
      padding-bottom: .1rem;
      font-size: theme(fontSize.$(alias));
    }
  } @else {
    .btn.is-$(size) {
      @apply px-3 py-1;
      font-size: theme(fontSize.$(alias));
    }
  }
}
</style>
