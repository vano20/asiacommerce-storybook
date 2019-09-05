<template>
    <!-- :class="[{ 'btn-solid': isSolid }, 'btn ' + variantClass]" -->
    <!-- :class="[isSolid ? 'is-solid ' + variantClass : '' + variantClass ]" -->
  <component
    :class="['btn ' + variantClass, sizeClass, { 'w-full' : isFullwidth }, { 'is-solid' : isSolid } ]"
    :is="wrapType"
    :href="href"
    @click="callback($event)"
  >
    <slot>Button</slot>
  </component>
</template>

<script>
export default {
  name: 'BaseButton',
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
    isFullwidth: {
      type: Boolean,
      default: false
    },
    variant: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'medium'
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
  @apply border bg-white rounded inline-block border-gray-400;
  transition: all .08s ease-in-out;

  &:hover {
    @apply bg-gray-100 border-gray-500;
    box-shadow: 0 3px 6px theme(colors.gray.500).1, 0 2px 3px theme(colors.gray.500).2;
  }

  &:active {
    box-shadow: 0 0 1px 0 theme(colors.gray.600).1, 0 0 1px 2px theme(colors.gray.500).1;
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

button {
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
    button.is-$(size),
    a.is-$(size) {
      /* @apply px-2; */
      padding-left: .3rem;
      padding-right: .3rem;
      padding-top: .1rem;
      padding-bottom: .1rem;
      font-size: theme(fontSize.$(alias));
    }
  } @else {
    button.is-$(size),
    a.is-$(size) {
      @apply px-3 py-1;
      font-size: theme(fontSize.$(alias));
    }
  }
}
</style>
