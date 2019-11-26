<template>
  <div class="shadow navbar bg-white"> <!-- wrapper -->
    <div class="flex items-center pr-4"> <!-- inner -->
      <div class="flex-none items-center">
        <navbar-brand />
      </div>
      <div class="flex-auto ml-4">
        Page title here
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
      <div class="flex-none ml-2">
        <dropdown
          has-custom-label
          trigger-class="navbar-cart-trigger"
          trigger-is-link
          right-dropdown
          class="navbar-cart-wrapper"
        >
          <template #custom-label>
            <dynamic-icon icon="cart" />
          </template>
          
          <!-- dropdown menu start -->
          <cart-dropdown-item />
          <cart-dropdown-item />
          <dropdown-item class="bg-gray-100">
            <div class="flex items-center text-lg">
              <div class="flex-auto">
                2452 Item(s)
              </div>
              <div class="flex-none text-primary-500">
                <router-link class="btn is-medium rounded" to="my-cart">
                  View my cart
                </router-link>
              </div>
            </div>
          </dropdown-item>
          <!-- dropdown menu end -->
        </dropdown>

        <dropdown
          has-custom-label
          trigger-class="juamput"
          trigger-is-link
          right-dropdown
          class="navbar-notification-wrapper"
        >
          <template #custom-label>
            <dynamic-icon icon="bell" />
          </template>

          <!-- dropdown menu start -->
          <dropdown-item>
            <div class="flex items-center">
              <div class="flex-auto">
                Notification
              </div>
              <div class="flex-none">
                <a href="#">
                  Mark all as read
                </a>
              </div>
            </div>
          </dropdown-item>
          <notification-item
            class="dropdown-item"
            v-for="item in notifications"
            :key="item.id"
            :item="item"
            :type="item.type"
            :is-read="item.read"
          />
          <dropdown-item href="#">
            View all notification
          </dropdown-item>
          <!-- dropdown menu end-->
        </dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { InputText, InputGroup } from "../ui/Inputs";
import { BaseButton } from "../ui/Buttons";
import NavbarBrand from "./NavbarBrand";
import DynamicIcon from "../../components/ui/DynamicIcon";
import { DropdownMenu, DropdownMenuItem } from "../../components/dropdowns";
import CartDropdownItem from "../../components/carts/CartDropdownItem"

import IconCart from "../../../src/assets/icons/cart.svg";
import IconBell from "../../../src/assets/icons/bell.svg";
import IconSearch from "../../../src/assets/icons/search.svg";
import notificationItem from "../../components/notifications/NotificationItem";

// mockup data here. Should be removed when handle with real data
import notificationMockJson from "../../mocks/notifications.json";

export default {
  name: "TheNavbar",
  components: {
    InputText,
    CartDropdownItem,
    dropdown: DropdownMenu,
    "dropdown-item": DropdownMenuItem,
    InputGroup,
    DynamicIcon,
    NavbarBrand,
    BaseButton,
    notificationItem,
    IconSearch,
    IconCart,
    IconBell
  },
  data: () => {
    return {
      notifications: notificationMockJson
    }
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

.navbar-cart-wrapper {

  >>> .dropdown-menu {
    width: 460px;
  }
}

.navbar-notification-wrapper {

  >>> .dropdown-menu {
    width: 400px;
  }
}
</style>
