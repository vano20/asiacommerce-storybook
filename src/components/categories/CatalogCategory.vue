<template>
  <div>
    <base-button
      v-for="(category, idx) in categories"
      :key="idx"
      size="small"
      class="m-1"
    >
      {{ category.label }}
    </base-button>
  </div>
</template>

<script>
import {BaseButton} from "../ui/Buttons"

export default {
  name: "CatalogCategory",
  components: {
    BaseButton
  },
  data: () => {
    return {
      categories: [
        {
          label: "Automotives",
          icon: "automotive"
        },
        {
          label: "Baby & Kids",
          icon: "baby-kids"
        },
        {
          label: "Electroncs & Gadget",
          icon: "electronic-gadget"
        },
        {
          label: "Game & Anime",
          icon: "game-anime"
        },
        {
          label: "Houseware",
          icon: "houseware"
        },
        {
          label: "Lifestyle & Accessories",
          icon: "lifestyle-accessories"
        },
        {
          label: "Machinery & Industrial Parts",
          icon: "machinery-industry"
        },
        {
          label: "Mens Fashion",
          icon: "mens-fashion"
        },
        {
          label: "Office & Stationery",
          icon: "office-stationery"
        },
        {
          label: "Sport & Outdoor",
          icon: "sport-outdoor"
        },
        {
          label: "Women Fashion",
          icon: "women-fashion"
        },
      ]
    }
  }
}
</script>

<style>

</style>