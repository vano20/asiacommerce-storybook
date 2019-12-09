<template>
  <slide-left>
    <div v-if="shown"
      :class="['slidebar ' + positionClass ]"
    >
      <div class="slidebar-backdrop" @click="toggleSlideBar" />
      <div class="slidebar-inner">
        <slot />
      </div>
    </div>
  </slide-left>
</template>

<script>
import { SlideXLeftTransition } from "vue2-transitions";

import { mapMutations } from "vuex";


export default {
  name: "SlideBar",
  components: {
    SlideLeft : SlideXLeftTransition
  },
  props: {
    shown: {
      default: false,
      type: Boolean
    },
    position: {
      type: String,
      default: "left"
    }
  },
  computed: {
    positionClass() {
      return "slidebar-" + this.position.toLowerCase();
    }
  },
  methods: {
    ...mapMutations({
      toggleSlideBar: 'TOGGLE_SLIDE_BAR'
    })
  },
};
</script>

<style scoped>

.slidebar {
  @apply fixed top-0 bottom-0 left-0 right-0;
  z-index: 10000;

  &-backdrop {
    @apply w-full h-full;
    background-color: theme(colors.gray.100).8;
  }

  &-inner {
    @apply bg-white absolute inset-y-0;
  }
}

</style>
