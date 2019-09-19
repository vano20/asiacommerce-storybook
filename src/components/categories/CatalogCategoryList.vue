<template>
  <div>
    <div class="bg-white px-4 pt-4 pb-6 relative">
      <base-button
        v-for="(category, idx) in categories"
        :key="idx"
        class="m-1 category-button"
      >
        <dynamic-icon :icon="category.icon" />
        {{ category.label }}
      </base-button>
      <base-button class="category-button">
        <dynamic-icon icon="dots-horizontal" class="dots" />
        View all categories
      </base-button>
      <div class="absolute inset-x-0 mx-auto text-center" style="bottom: -15px;">
        <base-button is-pill is-link class="shadow-md">
          Expand all categories
        </base-button>
      </div>
    </div>
  </div>
</template>

<script>
import {BaseButton} from "../ui/Buttons"
import DynamicIcon from "../ui/DynamicIcon";

export default {
  name: "CatalogCategoryList",
  components: {
    BaseButton,
    DynamicIcon
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
          icon: "lifestyle-accessory"
        },
        {
          label: "Machinery & Industrial Parts",
          icon: "machine-industry"
        },
        {
          label: "Mens Fashion",
          icon: "men-fashion"
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

<style scoped>
.category-button {
  padding: .2rem .5rem;

  svg {
    width: 1rem;
    height: 1rem;
    vertical-align: top;
    margin-right: 2px;
  }

  .dots {
    width: .8rem;
    padding-right: 2px;
  }
}
</style>