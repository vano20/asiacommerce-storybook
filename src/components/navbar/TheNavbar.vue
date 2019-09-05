<template>
  <div class="shadow navbar">
    <div class="flex items-center pr-4">
      <div class="flex-auto items-center">
        <figure class="px-2 py-1 inline-block" style="vertical-align:middle;">
          <img
            src="https://ali.asiacommerce.net/img/ali-logo-asiacommerce-small.5db1336e.png"
            class="h-10"
            alt="Asiacomerce (ALI) logo"
          />
        </figure>
        <base-button class="navbar-btn">
          <icon-menu />
        </base-button>
      </div>

      <div class="flex-none">
        <input-group icon-inside class="navbar-input">
          <template slot="prepend">
            <icon-search />
          </template>
          <input-text placeholder="Search something" />
          <template slot="append">
            <base-button>Search</base-button>
          </template>
        </input-group>
      </div>
      <div class="flex-none">
        <base-button class="navbar-btn">
          <IconCart />
        </base-button>
        <base-button class="navbar-btn">
          <IconBell />
        </base-button>
      </div>
    </div>
  </div>
</template>

<script>
import { InputText, InputGroup } from "../ui/Inputs";
import { BaseButton } from "../ui/Buttons";

import IconMenu from "../../../src/assets/icons/menu.svg";
import IconCart from "../../../src/assets/icons/cart.svg";
import IconBell from "../../../src/assets/icons/bell.svg";
import IconSearch from "../../../src/assets/icons/search.svg";

export default {
  name: "TheNavbar",
  components: {
    InputText,
    InputGroup,
    BaseButton,
    IconSearch,
    IconMenu,
    IconCart,
    IconBell
  }
};
</script>

<style lang="css" scoped>

.navbar-btn {
  @apply border-none shadow-none -my-2 py-3 px-4 text-gray-600;

  &:hover {
    @apply text-gray-700;
  }
}

.navbar-input {
  @apply mr-2;

  input, button {
    @apply shadow-none;
  }

  button {
    @apply border-gray-200 rounded-r-full;

    &:hover {
      color: theme(colors.primary.500);
      background: white;
      /* background-color: theme(colors.primary.500); */
    }
  }

  input {
    @apply rounded-l-full bg-gray-100 border-gray-200;
  }
}
</style>
