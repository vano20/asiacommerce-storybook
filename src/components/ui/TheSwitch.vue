<template>
  <label :class="{ enabled: value }">
    <input
      type="checkbox"
      :title="title"
      :checked="value"
      :disabled="disabled"
      @change="trigger"
    />
    <span
      v-if="title"
    >
      {{ this.title }}
    </span>
  </label>
</template>

<script>
export default {
  name: "TheSwitch",
  props: {
    value: {
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    emitOnMount: {
      default: true
    }
  },
  mounted () {
    if(this.emitOnMount) {
      this.$emit('input', this.value)
    }
  },
  methods: {
    trigger (e) {
      this.$emit('input', e.target.checked)
    }
  },
}
</script>

<style lang="css" scoped>
label{
  @apply relative inline-block cursor-pointer overflow-hidden align-middle select-none;
  height: 24px;
  min-width: 34px;

  &:before {
    @apply absolute bg-gray-300 inset-y-0 left-0 rounded border border-gray-400 ;
    content: "";
    width: 30px;
    transition: all .08s ease-in-out;
  }

  &:after {
    @apply block absolute overflow-hidden inset-y-0 left-0 bg-white rounded-sm border border-gray-400;
    box-shadow: 0 0 2px 0 theme(colors.gray.500).1;
    margin: 2px 3px;
    content: "";
    height: 20px;
    width: 12px;
    transition: all .14s ease-in-out;
  }
  
  > input {
    display: none;
  }

  > span {
    @apply select-none inline-block h-full ;
    padding: 0 6px 0 36px;
    line-height: 1.75;

    
  }

  &.enabled {

    &:before {
      @apply bg-primary-400 border-primary-500;
    }

    &:after {
      @apply bg-primary-100 border-primary-500;
      transform: translateX(12px); 
    }
  }
}
</style>