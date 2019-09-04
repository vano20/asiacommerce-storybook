<template>
  <div>
    <div class="text-accent-500">First: {{ chosenFirst }}</div>
    <div class="text-pink-500">Last: {{ chosenLast }}</div>
  </div>
</template>

<script>
const datas = [
  {
    id: 1,
    first: 'John',
    last: 'Doe'
  },
  {
    id: 2,
    first: 'Alpha',
    last: 'Beta'
  }
]

const datars = {
  satu: {
    first: 'Donald',
    last: 'bebek'
  },
  dua: {
    first: 'mickey',
    last: 'bebek'
  }
}


export default {
  props: {
    name: String
  },
  computed: {
    chosenFirst() {
      return datars[this.name.first];
    },
    chosenLast() {
      return datars[this.name.last];
    }
  }
}
</script>

<style>

</style>