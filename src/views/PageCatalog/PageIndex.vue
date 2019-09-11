<template>
  <div class="ml-64 mt-12">
    <!-- Categories -->
    <category category-selected="hotproducts" />

    <!-- Card Item -->
    <div class="w-full bg-gray-200 h-auto">
      {{ this.products }}
    </div>
  </div>
</template>

<script>
import filter from "lodash/filter";

import AuthServices from "../../services/auth";
import CatalogServices from "../../services/catalog";

import category from "./Category";

import { mapActions, mapState } from "vuex";

import catalogs from "../../store/modules/catalogs";

export default {
  name: "PageCatalog",
  components: {
    category
  },
  data() {
    return {
      data: null
    };
  },

  async mounted() {
    this.login();

    // Get Products
    await this.fetchProducts();
    // console.log(this.products)
  },

  computed: {
    ...mapState({
      products: state => state.catalogs.items
    })
  },

  methods: {
    ...mapActions({
      fetchProducts: "catalogs/fetchProduct"
    }),

    async login() {
      try {
        const login_options = {
          username: "developer@asiacommerce.net",
          password: "test1234"
        };

        const login_data = await AuthServices.login(login_options.username, login_options.password);
        
        window.localStorage.setItem("access_token", login_data.data.access_token);

        window.localStorage.setItem("user_info", JSON.stringify(login_data));

        const userData = await AuthServices.getUser();

        const id_member = userData.data.data.relationships.memberships[0].id;
        const member_name = userData.data.included.memberships[id_member].attributes.name;

        window.localStorage.setItem("member", member_name);
        window.localStorage.setItem("user_data", JSON.stringify(userData.data.data));
        window.localStorage.setItem("user_included", JSON.stringify(userData.data.included));
        window.localStorage.setItem("ali_1_access_token", userData.data.data.ali_auth_token);

        // check currency
        const userSettingCurrency = filter(userData.data.included.settings, object => {
          return object.attributes.key === "currency";
        });
        // check multiplier
        const userSettingMultiplier = filter(userData.data.included.settings, object => {
          return object.attributes.key === "multiplier";
        });

        // check currency
        if (userSettingCurrency.length !== 0) window.localStorage.setItem("currency", userSettingCurrency[0].value);
        else window.localStorage.setItem("currency", "IDR");
        // check multiplier
        if (userSettingMultiplier.length !== 0) window.localStorage.setItem("multiplier", userSettingMultiplier[0].value);
        else window.localStorage.setItem("multiplier", "200");
      } catch (error) {
        console.log("error", error);
      }
    }
  }
};
</script>

<style />
