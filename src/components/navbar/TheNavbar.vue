<template>
  <div class="shadow navbar bg-white"> <!-- wrapper -->
    <div class="flex items-center pr-4"> <!-- inner -->
      <navbar-brand />
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
      <div class="flex-none ml-2">
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
import NavbarBrand from "./NavbarBrand";

import IconCart from "../../../src/assets/icons/cart.svg";
import IconBell from "../../../src/assets/icons/bell.svg";
import IconSearch from "../../../src/assets/icons/search.svg";

export default {
  name: "TheNavbar",
  components: {
    InputText,
    InputGroup,
    NavbarBrand,
    BaseButton,
    IconSearch,
    IconCart,
    IconBell
  }
};
</script>

<style lang="css">
button.navbar-btn {
  @apply border-none shadow-none -my-2 py-3 px-4 text-gray-600;

  &:hover {
    @apply text-gray-700 shadow-none;
  }

  &:active {
    background-color: theme(colors.gray.200).6;
  }
}
</style>

<style lang="css" scoped>
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
