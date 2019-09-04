<template>
  <input
    type="text"
    :class="'input border placeholder-gray-300 border-gray-300 rounded ' + sizeClass"
    :value="value"
    :placeholder="placeholder"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  name: "InputText",
  props: {
    size: {
      type: String,
      default: 'medium'
    },
    value: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: 'Placeholder here'
    }
  },
  computed: {
    sizeClass() {
      return 'is-' + this.size.toLowerCase()
    }
  }
}
</script>

<style scoped>

input {

  &:hover {
    box-shadow: 0 3px 6px theme(colors.gray.500).1, 0 2px 3px theme(colors.gray.500).2;
  }

  &:focus {
    outline: none;
    @apply border-gray-400 bg-white;
  }
}

</style>