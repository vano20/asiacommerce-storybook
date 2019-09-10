<template>
  <div class="flex mb-4">
    <div class="w-full bg-gray-200 h-auto p-2">
      <div class="w-full h-auto">
        Category
      </div>
      <base-button
        v-for="(category, idx) in getCategories"
        :key="idx"
        size="small"
        class="m-1 category-button"
      >
        <dynamic-icon :icon="category.icon" />
        {{ category.label }}
      </base-button>
    </div>
  </div>
</template>

<script>
import { BaseButton } from "../../components/ui/Buttons";
import DynamicIcon from "../../components/ui/DynamicIcon";

export default {
  name: "category",
  components: {
    BaseButton,
    DynamicIcon
  },
  props: {
    categorySelected: {
      type: String
    }
  },
  computed: {
    getCategories() {
      if (this.categorySelected === "retail" && this.categorySelected === "wholesale") {
        return [
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
          }
        ];
      } else {
        return [
          {
            label: "Wholesale",
            icon: "men-fashion"
          },
          {
            label: "Retail",
            icon: "women-fashion"
          },
          {
            label: "Hot Products",
            icon: "sport-outdoor"
          },
          {
            label: "Only For You",
            icon: "game-anime"
          }
        ];
      }
    }
  }
};
</script>
