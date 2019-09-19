<template>
      <!-- [`number-input--${size}`]: size, -->
  <div
    class="input-number"
    :class="{
      'is-stacked': isStacked,
    }"
    v-on="listeners"
  >
    <div class="prepend inline-block" v-if="!isStacked">
      <base-button
        class=""
        :disabled="disabled || readonly || !decreasable"
        @click="decrease"
      >
        <dynamic-icon icon="minus" />
      </base-button>
    </div>
    <input
      ref="input"
      class="py-1 px-2"
      type="number"
      :name="name"
      :value="currentValue"
      :min="min"
      :max="max"
      :step="step"
      :readonly="readonly || !inputtable"
      :disabled="disabled || (!decreasable && !increasable)"
      :placeholder="placeholder"
      autocomplete="off"
      @change="change"
      @paste="paste"
    >

    <div v-if="isStacked" class="append">
      <base-button
        size="small"
        :disabled="disabled || readonly || !increasable"
        @click="increase"
      >
        <dynamic-icon class="stacked-icon" icon="caret-up" />
      </base-button>
      <base-button
        size="small"
        :disabled="disabled || readonly || !increasable"
        @click="decrease"
      >
        <dynamic-icon class="stacked-icon" icon="caret-down" />
      </base-button>
    </div>
    <div v-else class="append inline-block">
      <base-button
        class=""
        :disabled="disabled || readonly || !increasable"
        @click="increase"
      >
        <dynamic-icon icon="plus" />
      </base-button>
    </div>
  </div>
</template>

<script>
import { BaseButton } from "./Buttons";
import DynamicIcon from "./DynamicIcon";

const isNaN = Number.isNaN || window.isNaN;
const REGEXP_NUMBER = /^-?(?:\d+|\d+\.\d+|\.\d+)(?:[eE][-+]?\d+)?$/;
const REGEXP_DECIMALS = /\.\d*(?:0|9){10}\d*$/;
const normalizeDecimalNumber = (value, times = 100000000000) => (
  REGEXP_DECIMALS.test(value) ? (Math.round(value * times) / times) : value
);
export default {
  name: 'InputNumber',
  components: {
    BaseButton,
    DynamicIcon
  },
  model: {
    event: 'change',
  },
  props: {
    disabled: Boolean,
    isStacked: Boolean,
    inputtable: {
      type: Boolean,
      default: true,
    },
    max: {
      type: Number,
      default: Infinity,
    },
    min: {
      type: Number,
      default: -Infinity,
    },
    name: {
      type: String,
      default: undefined,
    },
    placeholder: {
      type: String,
      default: undefined,
    },
    readonly: Boolean,
    rounded: Boolean,
    size: {
      type: String,
      default: undefined,
    },
    step: {
      type: Number,
      default: 1,
    },
    value: {
      type: Number,
      default: NaN,
    },
  },
  data() {
    return {
      currentValue: NaN,
    };
  },
  computed: {
    /**
     * Indicate if the value is increasable.
     * @returns {boolean} Return `true` if it is decreasable, else `false`.
     */
    increasable() {
      const num = this.currentValue;
      return isNaN(num) || num < this.max;
    },
    /**
     * Indicate if the value is decreasable.
     * @returns {boolean} Return `true` if it is decreasable, else `false`.
     */
    decreasable() {
      const num = this.currentValue;
      return isNaN(num) || num > this.min;
    },
    /**
     * Filter listeners
     * @returns {Object} Return filtered listeners.
     */
    listeners() {
      const listeners = { ...this.$listeners };
      delete listeners.change;
      return listeners;
    },
  },
  watch: {
    value: {
      immediate: true,
      handler(newValue, oldValue) {
        if (
          // Avoid triggering change event when created
          !(isNaN(newValue) && typeof oldValue === 'undefined')
          // Avoid infinite loop
          && newValue !== this.currentValue
        ) {
          this.setValue(newValue);
        }
      },
    },
  },
  methods: {
    /**
     * Change event handler.
     * @param {string} value - The new value.
     */
    change(event) {
      this.setValue(Math.min(this.max, Math.max(this.min, event.target.value)));
    },
    /**
     * Paste event handler.
     * @param {Event} event - Event object.
     */
    paste(event) {
      const clipboardData = event.clipboardData || window.clipboardData;
      if (clipboardData && !REGEXP_NUMBER.test(clipboardData.getData('text'))) {
        event.preventDefault();
      }
    },
    /**
     * Decrease the value.
     */
    decrease() {
      if (this.decreasable) {
        let { currentValue } = this;
        if (isNaN(currentValue)) {
          currentValue = 0;
        }
        this.setValue(Math.min(this.max, Math.max(
          this.min,
          normalizeDecimalNumber(currentValue - this.step),
        )));
      }
    },
    /**
     * Increase the value.
     */
    increase() {
      if (this.increasable) {
        let { currentValue } = this;
        if (isNaN(currentValue)) {
          currentValue = 0;
        }
        this.setValue(Math.min(this.max, Math.max(
          this.min,
          normalizeDecimalNumber(currentValue + this.step),
        )));
      }
    },
    /**
     * Set new value and dispatch change event.
     * @param {number} value - The new value to set.
     */
    setValue(value) {
      const oldValue = this.currentValue;
      let newValue = this.rounded ? Math.round(value) : value;
      if (this.min <= this.max) {
        newValue = Math.min(this.max, Math.max(this.min, newValue));
      }
      this.currentValue = newValue;
      if (newValue === oldValue) {
        // Force to override the number in the input box (#13).
        this.$refs.input.value = newValue;
      }
      this.$emit('change', newValue, oldValue);
    },
  },
};
</script>

<style lang="css" scoped>

.input-number {

  input {
    border-width: 1px;
    -moz-appearance:textfield;
    width: 50px;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      display: none;
      margin: 0
    }
    
  }

  .prepend {
    margin-right: -5px;

    button {
      @apply rounded-r-none relative;
    }
  }

  .append {
    margin-left: -4px;

    button {
      @apply rounded-l-none;
    }
  }
}

.is-stacked {
  @apply inline-flex items-center;

  input {
    @apply flex-auto rounded-l pl-4;
    height: 35px;
  }
  .append {
    @apply flex-none;
    width: min-content;
    margin-left: -1px;

    button {
      @apply py-0 items-center block;
      height: 18px;

      &:first-of-type {
        margin-bottom: -1px;
        border-bottom-right-radius: 0;
      }

      &:last-of-type {
        margin-top: -1px;
        border-top-right-radius: 0;
      }

      .stacked-icon {
        @apply mx-2 -my-1;
        width: .5rem;
        height: .5rem;
      }
    }
  }
}

</style>