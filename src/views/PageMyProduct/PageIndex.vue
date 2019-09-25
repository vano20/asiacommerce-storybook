<template>
  <div class="p-10">
    
    <!-- tab menu -->
    <div class="flex items-center  bg-white">
      <div class="flex-auto">
        <div class="">
          <div class="bg-info-100 inline-flex px-3 py-4">
            <input type="checkbox" >
          </div>
          <div class="inline-flex px-3 py-4 text-gray-600">
            Product
          </div>
          <div class="inline-flex px-3 py-4 text-gray-700 border-b-2 border-primary-400">
            Description
          </div>
          <div class="inline-flex px-3 py-4 text-gray-600">
            Variants
          </div>
          <div class="inline-flex px-3 py-4 text-gray-600">
            Images
          </div>
          <div class="inline-flex px-3 py-4 text-gray-600">
            Settings
          </div>
        </div>
      </div>
      <div class="flex-none">
        <button-group>
          <base-button class="" variant="primary" >
            <dynamic-icon icon="shop" />
            Push to store
          </base-button>
          <base-button is-solid variant="primary">
            <dynamic-icon icon="basket-add" />
            Add to cart
          </base-button>
        </button-group>
        <base-button is-link class="ml-2">
          <dynamic-icon icon="dots-horizontal"/>
        </base-button>
      </div>

    </div>

    <!-- tab summary content -->
    <div class="bg-white p-4">
      <div class="flex">
        <div class="flex-none pr-4">
          <div class="relative">
            <figure>
              <img src="https://picsum.photos/seed/picsum/180/200" alt="">
            </figure>
          </div>
        </div>
        <div class="flex-auto">
          <div class="block">
            <span class="badge">badge is here</span>
            <span class="badge is-primary">badge is here</span>
            <span class="badge is-accent">badge is here</span>
            <span class="badge is-warning">badge is here</span>
            <span class="badge is-info">badge is here</span>
            <span class="badge is-success">badge is here</span>
            <span class="badge is-pink">label is here</span>
          </div>
          <div class="block">
            <badge title="title" variant="primary" />
            <badge>
              <em>miring</em> Sithik
            </badge>
          </div>
          <div class="text-sm">
            Recommendation > Recommendation for Reymond > Sneakers
          </div>
          <h4 class="text-lg">
            0 to 2 years old 1 girl autumn child boy shoes 7 flashing lights 6 single shoes 5 sports shoes 4 children 3 baby white shoes
          </h4>
          <div class="bg-gray-100 border border-gray-200 flex items px-2 py-1 rounded">
            <div class="flex-none text-lg text-gray-500 mr-2">
              Costs
            </div>
            <div class="flex-auto">
              <div class="inline-flex">
                <p class="text-lg mx-3 text-gray-600">
                  <span class="inline-block text-base text-gray-500">Product:&nbsp;</span>
                  <span class="inline-block font-medium">IDR 99,180.00</span>
                </p>
                <p class="text-lg mx-3 text-gray-600">
                  <span class="inline-block text-base text-gray-500">Logistic:&nbsp;</span>
                  <span class="inline-block font-medium">IDR 120,000.00</span>
                </p>
                <p class="text-lg mx-3 text-gray-600">
                  <span class="inline-block text-base text-gray-500">Landed:&nbsp;</span>
                  <span class="inline-block font-medium">IDR 219,180.00</span>
                </p>
              </div>
            </div>
          </div>
          <div class="my-1">
            <vue-select :options="options" multiple />
          </div>
        </div>
      </div>
    </div>

    
  </div>
</template>

<script>
import { BaseButton, ButtonGroup } from "../../components/ui/Buttons";
import TheBadge from "../../components/ui/TheBadge";
import DynamicIcon from "../../components/ui/DynamicIcon";

export default {
  name: "PageMyProduct",
  components: {
    BaseButton,
    ButtonGroup,
    "badge": TheBadge,
    DynamicIcon
  },
  data () {
    return {
      options: [
        "Automotive",
        "Women Fashion",
        "Man Fashion"
      ]
    }
  }
};
</script>
