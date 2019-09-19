<template>
  <div
    class="inline-flex relative align-top"
    :class="dropdownClasses"
  >
    <div class="dropdown-trigger" :class="{ 'is-split': isSplit }">
      <template v-if="isSplit">
        <button-group>
          <base-button
            :class="[
              triggerClasses,
              { 'is-link': triggerIsLink }
            ]"
            @click="toggleDropdown()"
          >
            <template
              v-if="hasCustomLabel === true"
            >
              <slot name="custom-label" />
            </template>
            <template v-else>
              {{ label }}
            </template>
          </base-button>
          <base-button
            class="button-caret"
            :class="[
              triggerClasses,
              { 'is-link': triggerIsLink },
            ]"
            @click="toggleDropdown()"
          >
            <dynamic-icon icon="caret-down"/>
          </base-button>
        </button-group>
      </template>
      <template v-else>
        <base-button
          :class="[
            triggerClasses,
            { 'is-link': triggerIsLink },
          ]"
          @click="toggleDropdown()"
        >
          <template
            v-if="hasCustomLabel === true"
          >
            <slot name="custom-label" />
          </template>
          <template v-else>
            {{ label }}
          </template>
        </base-button>
      </template>
    </div>
    <transition name="dropdown">
      <div
        class="dropdown-menu left-0 absolute z-20 "
        id="dropdown-menu2"
        role="menu"
        v-if="isActive"
      >
        <div class="dropdown-content bg-white rounded shadow py-2 border">
          <slot>
            Don't forget to fill these section with "DropdownMenuItem" component
          </slot>
        </div>
      </div>
    </transition>
  </div>


</template>

<script>
import { BaseButton, ButtonGroup } from "../ui/Buttons";
import DynamicIcon from "../ui/DynamicIcon";

export default {
  name: "DropdownMenu",
  components: {
    ButtonGroup, BaseButton,
    DynamicIcon
  },
  props: {
    label: String,
    disabled: Boolean,
    isSplit: Boolean,
    triggerIsLink: Boolean,
    hasCustomLabel: {
      type: Boolean,
      default: false
    },
    triggerClass: {
      type: String,
      default: "null",
    },
    href: String
  },
  created: function() {
    let self = this;

    window.addEventListener('click', function(e){
      // close dropdown when clicked outside
      if (!self.$el.contains(e.target)){
        self.isActive = false
      } 
    })
  },
  data() {
    return {
      isActive: false
    }
  },
  computed: {
    dropdownClasses: function() {
      if (this.isActive) {
        return "dropdown is-active";
      } else {
        return "dropdown";
      }
      console.log("dropdownClasses = " + this.dropdownClasses);
    },
    triggerClasses() {
      return this.triggerClass.toLowerCase();
    },
  },
  methods: {
    toggleDropdown () {
      if (this.disabled) {
        return 
      }
      this.isActive = !this.isActive;
    },
  }
}
</script>

<style lang="css" scoped>

  .dropdown {

    
    &-menu {
      min-width: 12rem;
      top: 100%;
      padding-top: 4px;
    }

    &-content {
    }

    &.is-active {

      .dropdown-menu {
        /* display: block; */
      }
    }

    &-item {
      
    }

    &-divider {
      @apply border-none my-2 block bg-gray-200;
      height: 1px;
    }

    .is-split {

      .button-group {

        button:first-of-type {
          @apply pr-1;
        }

        .button-caret {
          @apply px-2;

          > svg {
            width: .5rem;
          }
        }

      }

    }

    /* dropdown transition animation */
    &-enter,
    &-leave-to {
      opacity: 0;
      top: 96%;
    }

    &-leave,
    &-enter-to {
      opacity: 1;
      top: 100%;
    }

    &-enter-active,
    &-leave-active {
      position: absolute;
      width: 100%;
      transition: all 160ms ease-in-out;
    }

    &-enter-active { transition-delay: 60ms }
  }

</style>