<template>
  <div class="breadcrumb border rounded-full inline-flex pr-2 bg-white">
  
    <dropdown :label="categories.label" has-custom-label trigger-class="rounded-l-full breadcrumb-button"  triggerIsLink>
      <template #custom-label>
        <dynamic-icon icon="category-home" />
      </template>
      <dropdown-item href="#" v-for="(category,key) in categories" v-bind:key="key">
        {{category.label}}
      </dropdown-item>
      <!-- <hr class="dropdown-divider">
      <dropdown-item>
        <p>You simply need to use a <code>&lt;div&gt;</code> instead.</p>
      </dropdown-item>
      <hr class="dropdown-divider">
      <dropdown-item href="#">
        This is a link
      </dropdown-item> -->
    </dropdown>

    <dropdown is-split label="Category level 1" trigger-class="breadcrumb-button" triggerIsLink>
      <dropdown-item>
        <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
      </dropdown-item>
      <hr class="dropdown-divider">
      <dropdown-item>
        <p>You simply need to use a <code>&lt;div&gt;</code> instead.</p>
      </dropdown-item>
      <hr class="dropdown-divider">
      <dropdown-item href="#">
        This is a link
      </dropdown-item>
      
    </dropdown>
    
    <base-button is-link class="breadcrumb-button">Last category here</base-button>
    
  </div>
</template>

<script>
import { BaseButton } from "../ui/Buttons";
import DynamicIcon from "../ui/DynamicIcon";
import { DropdownMenu, DropdownMenuItem } from "../dropdowns"
import { CatalogCategoryList } from "../categories/CatalogCategoryList"

export default {
  name: "BreadcrumbCategory",
  components: {
    BaseButton,
    "dropdown": DropdownMenu, "dropdown-item": DropdownMenuItem,
    DynamicIcon,
    CatalogCategoryList
  },
  props: {
    categories: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="css" scoped>
.breadcrumb {
  
  >>> .breadcrumb-button {
    @apply text-gray-600;
  }

  >>> .dropdown {
    &:hover {

      .breadcrumb-button {
        @apply text-primary-500;
      }
    }
  }
}
</style>