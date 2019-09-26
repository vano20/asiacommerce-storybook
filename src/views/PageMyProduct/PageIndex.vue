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
          <div class="inline-flex px-3 py-4 text-gray-700 border-t-2 border-gray-200 border-l border-r" style="border-top-color: #FFA361;">
            Description
          </div>
          <div class="inline-flex px-3 py-4 text-gray-600">
            Variants [12]
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
          <div class="flex items-center">
            <div class="flex-auto">
              <div class="text-sm text-gray-600">
                Recommendation > Recommendation for Reymond > Sneakers
              </div>
            </div>
            <div class="flex-none">
              <div class="block">
                <div class="badge-group">
                  <badge title="Not pushed" is-solid size="sm"/>
                  <badge variant="accent" size="sm">
                    <dynamic-icon icon="check-box" />
                    7 variants selected
                  </badge>
                </div>
              </div>
            </div>
          </div>
          <div class="py-2">
            <h4 class="text-lg">
              0 to 2 years old 1 girl autumn child boy shoes 7 flashing lights 6 single shoes 5 sports shoes 4 children 3 baby white shoes
              <span>
                <button-group>
                  <base-button is-links size="small">
                    edit
                  </base-button>
                  <base-button is-links size="small">
                    view
                  </base-button>
                </button-group>
              </span>
            </h4>
          </div>
          <div class="bg-gray-100 border border-gray-200 flex items px-2 py-1 rounded my-1">
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
          <div class="py-2 flex items-center">
            <div class="flex-none pr-2">
              <p>
                Categories:
                <badge is-pill>
                  <dynamic-icon icon="info" />
                </badge>
              </p>
            </div>
            <div class="flex-auto">
              <vue-select :options="options" multiple />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- tab setting content -->
    <div class="bg-white p-4 border-t border-gray-200">
      <div class="mx-auto" style="width: 400px;">
        
        <div class="flex">
          <p class="flex-auto">
            Price calculation type
          </p>
          <div class="flex-none">
            <div class="inline-flex px-2 py-1 border-b border-primary-400">
              Multiplier
            </div>
            <div class="inline-flex px-2 py-1 ">
              Fixed
            </div>
          </div>
        </div>

        <div class="bg-gray-100">
          <input-group>
            <template slot="prepend">
              <div class="select">
                <select name="" id="" class="p-1 border">
                  <option value="">IDR</option>
                  <option value="">USD</option>
                </select>
              </div>
            </template>
            <input-text value="200%" />
          </input-group>
        </div>

      <div class="py-2">
        <base-button>
          Update pricing calculation
        </base-button>
      </div>
      </div>
    </div>

    
  </div>
</template>

<script>
import { BaseButton, ButtonGroup } from "../../components/ui/Buttons";
import { InputGroup, InputText } from "../../components/ui/Inputs";
import TheBadge from "../../components/ui/TheBadge";
import DynamicIcon from "../../components/ui/DynamicIcon";

export default {
  name: "PageMyProduct",
  components: {
    BaseButton,
    ButtonGroup,
    "badge": TheBadge,
    InputGroup,
    InputText,
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
