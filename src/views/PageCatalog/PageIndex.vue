<template>
  <div class="">


    <!-- Category list -->
    <div class="-mx-4 mb-10 pt-10 shadow bg-white">

      <!-- category list header -->
      <div class="category-list-header block mx-4 mb-4 flex items-center">

        <!-- breadcrumb of categories here -->
        <div class="category-breadcrumb flex-auto">
          <breadcrumb-category />
          <p class="inline-block pl-3">
            <span class="text-gray-500">
            "Keyword here"
            </span>
              &nbsp;-&nbsp;15 found
          </p>
        </div>

        <div class="category-list-type flex-none">
          <span class="font-medium text-gray-500">
            Category types:&nbsp;
          </span>
          <button-group class="border rounded border-gray-400">
            <input-radio name="category-type" buttonize value="Hot-Product" v-model="categoryTypeValue" custom-class="is-medium">
              Hot Products
            </input-radio>
            <input-radio name="category-type" buttonize value="Wholesale" v-model="categoryTypeValue" custom-class="is-medium" checked>
              Wholesale
            </input-radio>
            <input-radio name="category-type" buttonize value="Retail" v-model="categoryTypeValue" custom-class="is-medium">
              Retail
            </input-radio>
          </button-group>
        </div>


      </div>


      <!-- <category category-selected="hotproducts" /> -->
      <category-list />
    </div>

    <!-- Card Item -->
    <div class="container mx-auto flex flex-wrap">
      <!-- {{ this.products }} -->

      <card-item
        v-for="product in products"
        :key="product.id"
        :item="product"
      >
        <!-- {{ product.name }} -->
      </card-item>
    </div>
  </div>
</template>

<script>
import filter from "lodash/filter";

import AuthServices from "../../services/auth";
import CatalogServices from "../../services/catalog";

import category from "./Category";
import CatalogCategoryList from "../../components/categories/CatalogCategoryList";
import BreadcrumbCategory from "../../components/breadcrumbs/BreadcrumbCategory";

import { ButtonGroup } from "../../components/ui/Buttons";
import { InputRadio } from "../../components/ui/Inputs";

import { mapActions, mapState } from "vuex";

import catalogs from "../../store/modules/catalogs";
import CardItem from "../../components/cards/CardItem";

export default {
  name: "PageCatalog",
  components: {
    category,
    "category-list": CatalogCategoryList,
    CardItem,
    BreadcrumbCategory,
    ButtonGroup, InputRadio
  },
  data() {
    return {
      data: null,
      categoryTypeValue: "wholesale",
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
