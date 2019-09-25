<template>
  <div class="flex-auto items-center">
    <figure class="px-2 py-1 inline-block" style="vertical-align:middle;">
      <img
        src="https://ali.asiacommerce.net/img/ali-logo-asiacommerce-small.5db1336e.png"
        class="h-10"
        alt="Asiacomerce (ALI) logo"
      />
    </figure>
    <!-- <base-button class="navbar-btn"> -->
      <button class="btn is-link is-primary">
        <icon-menu />
      </button>
    <!-- </base-button> -->
  </div>
</template>

<script>
import { BaseButton } from "../ui/Buttons";
import IconMenu from "../../../src/assets/icons/menu.svg";

export default {
  name: "NavbarBrand",
  components: {
    BaseButton,
    IconMenu
  }
}
</script>

<style>

</style>