<template>
    <!-- :class="[{ 'btn-solid': isSolid }, 'btn ' + variantClass]" -->
    <!-- :class="[isSolid ? 'is-solid ' + variantClass : '' + variantClass ]" -->
  <component
    :class="[isSolid ? 'btn-solid': 'btn', variantClass, sizeClass ]"
    :is="wrapType"
    :href="href"
    @click="callback($event)"
  >
    <slot>Button</slot>
  </component>
</template>

<script>
export default {
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
    variant: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'medium'
    }
  },
  data: {
  },
  methods: {
    callback: function(e) {
      this.$emit('click', e);
    }
  },
  computed: {
    wrapType() {
      if (this.href) {
        return 'a'
      } else {
        return 'button'
      }
    },
    variantClass () {
      return 'is-' + this.variant.toLowerCase()
    },
    sizeClass() {
      return 'is-' + this.size.toLowerCase()
    }
  }
}
</script>

<style>


/* @import "../../assets/styles/variables-base.css"; */

/* :root {
	--button-variant: (
		sm: 576px,
		md: 768px,
		lg: 992px,
		xl: 1200px
	);
} */
.btn,
.btn-solid {
  @apply border bg-white rounded inline-block;
}


@each $variant in default, primary, accent, info, success, danger {
  .btn.is-$(variant) {
    color: theme(colors.$(variant).500);
    border-color: theme(colors.$(variant).500);
    
    @if $variant != default {
      &:hover {
        background-color: theme(colors.$(variant).100);
        box-shadow: 0 1px 3px 0 color(theme(colors.$(variant).500) a(10%)), 0 1px 2px 0 color(theme(colors.$(variant).500) a(60%))
      }
      &:focus {
      }
      &:active {
        @apply shadow-none;

      }
    } @else {
      &:hover {
        @apply text-gray-800 border-gray-400 shadow;
      }
      &:active {
        @apply border-gray-500 bg-primary-100 shadow-none;
      }
    }

  }
  
  .btn-solid.is-$(variant) {
    @if $variant != default {
      color: white;
      background-color: theme(colors.$(variant).500);
      border-color: theme(colors.$(variant).500);

      &:hover {
        background-color: color(theme(colors.$(variant).500) a(90%));
        box-shadow: 0 1px 3px 0 color(theme(colors.$(variant).500) a(10%)), 0 1px 2px 0 color(theme(colors.$(variant).500) a(60%))
        /* opacity: theme(opacity.90); */
      }

      &:active {
        background-color: theme(colors.$(variant).500);
        opacity: 1;
        box-shadow: none;
      }

    } @else {
      color: white;
      background-color: theme(colors.primary.500);
      border-color: theme(colors.primary.500);
      box-shadow: 0 1px 3px 0 (theme(colors.primary.500) a(10%)), 0 1px 2px 0 color(theme(colors.primary.500) a(60%));

      &:hover {
        /* color: white; */
        /* opacity: theme(opacity.90); */
        box-shadow: 0 1px 3px 0 color(theme(colors.primary.500) a(10%)), 0 1px 2px 0 color(theme(colors.primary.500) a(60%));
        background-color: color(theme(colors.primary.500) a(90%));
      }

      &:active {
        @apply bg-primary-500;
      }
    }
  }

}


/* :root {
  --button-size : (
    small: sm,
    medium: base,
    large: lg,
    huge: xl
  );
} */

@each $size, $alias in (small, medium, large, huge), (sm, base, lg, xl) {
  @if $size == small {
    button.is-$(size),
    a.is-$(size) {
      @apply px-3;
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