<template>
  <div class="p-10">
    <!-- tab menu -->
    <div class="flex items-center  bg-white">
      <div class="flex-auto">
        <div class="">
          <div class="bg-info-100 inline-flex px-3 py-4">
            <input type="checkbox" />
          </div>
          <div :class="getTabClass('product')" @click="setActiveTab('product')">
            Product
          </div>
          <div
            :class="getTabClass('description')"
            @click="setActiveTab('description')"
          >
            Description
          </div>
          <div
            :class="getTabClass('variants')"
            @click="setActiveTab('variants')"
          >
            Variants [12]
          </div>
          <div :class="getTabClass('images')" @click="setActiveTab('images')">
            Images
          </div>
          <div
            :class="getTabClass('settings')"
            @click="setActiveTab('settings')"
          >
            Settings
          </div>
        </div>
      </div>
      <div class="flex-none">
        <button-group>
          <base-button class="" variant="primary">
            <dynamic-icon icon="shop" />
            Push to store
          </base-button>
          <base-button is-solid variant="primary">
            <dynamic-icon icon="basket-add" />
            Add to cart
          </base-button>
        </button-group>
        <base-button is-link class="ml-2">
          <dynamic-icon icon="dots-horizontal" />
        </base-button>
      </div>
    </div>

    <!-- tab summary content -->
    <div v-if="tabSelected === 'product'" class="bg-white p-4">
      <div class="flex">
        <div class="flex-none pr-4">
          <div class="relative">
            <figure>
              <img src="https://picsum.photos/seed/picsum/180/200" alt="" />
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
                  <badge title="Not pushed" is-solid size="sm" />
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
          <div
            class="bg-gray-100 border border-gray-200 flex items px-2 py-1 rounded my-1"
          >
            <div class="flex-none text-lg text-gray-500 mr-2">
              Costs
            </div>
            <div class="flex-auto">
              <div class="inline-flex">
                <p class="text-lg mx-3 text-gray-600">
                  <span class="inline-block text-base text-gray-500">
                    Product:&nbsp;
                  </span>
                  <span class="inline-block font-medium">IDR 99,180.00</span>
                </p>
                <p class="text-lg mx-3 text-gray-600">
                  <span class="inline-block text-base text-gray-500">
                    Logistic:&nbsp;
                  </span>
                  <span class="inline-block font-medium">IDR 120,000.00</span>
                </p>
                <p class="text-lg mx-3 text-gray-600">
                  <span class="inline-block text-base text-gray-500">
                    Landed:&nbsp;
                  </span>
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

    <!-- tab description content -->
    <div
      v-if="tabSelected === 'description'"
      class="bg-white p-4 border-t border-gray-200"
    >
      <quill-editor
        ref="myQuillEditor"
        :content="quillContent"
        :options="editorOption"
        @change="onEditorChange($event)"
      >
      </quill-editor>
    </div>

    <!-- tab variants content -->
    <div
      v-if="tabSelected === 'variants'"
      class="bg-white p-4 border-t border-gray-200"
    >
      <app-message variant="info">
        halo
      </app-message>

      <div class="bg-gray-100 px-4 py-3 rounded">
        <div class="text-right">
          <base-button>
            Bulk price change
          </base-button>
        </div>
      </div>

      <variant-item class="border-t border-gray-200"></variant-item>
    </div>

    <!-- tab images content -->
    <div
      v-if="tabSelected === 'images'"
      class="bg-white p-4 border-t border-gray-200"
    >
      <div class="product-image-list flex -m-2">
        <img-item
          class="image-content-item"
          is-selected
        />
        <img-item
          class="image-content-item"
          user-image
        />
        <div class="image-content-item p-2">
          <button class="h-48 w-48 btn rounded pt-6">
            <dynamic-icon class="" icon="upload" style="width: 3rem; height: 3rem;"/>
            <span class="text-lg block mb-1">Upload your image</span>
            <span class="text-gray-500 leading-snug inline-block">It can be done with drag & drop by the way</span>
          </button>
        </div>
      </div>
    </div>

    <!-- tab setting content -->
    <div
      v-if="tabSelected === 'settings'"
      class="bg-white p-4 border-t border-gray-200"
    >
      <div class="mx-auto" style="width: 400px;">
        <div class="flex items-center">
          <p class="flex-auto bg-gray-100 py-1 pl-2 text-gray-500">
            Price calculation type
          </p>
          <div class="flex-none">
            <div class="inline-flex px-2 py-1 border-t border-primary-400">
              Multiplier
            </div>
            <div class="inline-flex px-2 py-1 ">
              Fixed
            </div>
          </div>
        </div>

        <div class="">
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
          <div class="px-2 py-1 my-2 flex items-center bg-gray-100 rounded">
            <div class="flex-none pr-2">
              <p>Include logistic?&nbsp;</p>
            </div>
            <div class="flex-auto">
              <the-switch v-model="checkboxIncludeLogistic" :title="checkboxIncludeLogistic ? 'Yes, please' : 'Not for now' " />
            </div>
          </div>
          <div class="flex items-center">
            <div class="flex-none pr-2">
              <p>Multiply by percentage :</p>
            </div>
            <div class="flex-auto">
              <input-group>
                <input-text value="20" />
                <template #append>
                  <div class="px-2 py-1 border rounded-r bg-gray-100 text-gray-600 font-medium">%</div>
                </template>
              </input-group>
            </div>
          </div>
        </div>

        <div class="py-2 text-right">
          <base-button variant="primary">
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
import ProductImageItem from "../../components/images/ProductImageItem";
import TheSwitch from "../../components/ui/TheSwitch";
import AppMessage from "../../components/ui/AppMessage";
import ProductVariantItem from "../../components/products/ProductVariantItem";
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { mapState, mapMutations } from "vuex";

export default {
  name: "PageMyProduct",
  components: {
    BaseButton,
    ButtonGroup,
    "badge": TheBadge,
    quillEditor,
    InputGroup,
    TheSwitch,
    InputText,
    DynamicIcon,
    AppMessage,
    "img-item": ProductImageItem,
    "variant-item": ProductVariantItem
  },
  data() {
    return {
      checkboxIncludeLogistic: true,
      options: [
        "Automotive",
        "Women Fashion",
        "Man Fashion"
      ],
      content: "<h2>I am Example</h2>",
      editorOption: {
        // some quill options
      },
    }
  },
  methods: {
    ...mapMutations({
      setSelectedTab: "product/SET_TAB_SELECTED"
    }),
    setActiveTab(name) {
      this.setSelectedTab(name)
    },
    onEditorBlur(quill) {
      console.log("editor blur!", quill);
    },
    onEditorFocus(quill) {
      console.log("editor focus!", quill);
    },
    onEditorReady(quill) {
      console.log("editor ready!", quill);
    },
    onEditorChange({ quill, html, text }) {
      console.log("editor change!", quill, html, text);
      this.content = html;
    },
    getTabClass(tab) {
      if (this.tabSelected === tab) {
        return [
          "inline-flex",
          "px-3",
          "py-4",
          "text-gray-700",
          "border-t-2",
          "border-gray-200",
          "border-l",
          "border-r",
          "border-tab"
        ];
      }
      return ["inline-flex", "px-3", "py-4", "text-gray-600"];
    }
  },
  computed: {
    ...mapState({
      tabSelected: state => state.product.tabSelected
    }),
    editor() {
      return this.$refs.myQuillEditor.quill;
    },
    quillContent() {
      return "yes";
    }
  },
  mounted() {
    console.log("this is current quill instance object", this.editor);
  }
};
</script>
<style>
.border-tab {
  border-top-color: #ffa361 !important;
}
</style>
