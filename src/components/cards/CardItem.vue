<template>
  <div
    class="product-item w-1/4 p-1"
    :class="{'is-imported' : item.imported, 'is-hovered' : hover } "
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <div
      class="card br2 center shadow-md rounded border"
    >
      <a
        class="label is-hot-product bg-orange-500 text-white"
        href="#0"
        v-if="item.hotProduct"
      >
        <icon-fire />
        Hot Product
      </a>
      <div class="product-item-cover relative">

        <a
          class="label is-success is-imported absolute text-sm px-4 py-1 "
          href="#0"
          v-if="item.imported"
        >
          Imported already
        </a>
        <!-- <div class="text-sm px-1 bg-danger-500 text-white rounded absolute inset-x-0 bottom-0 z-10 right-auto ml-2">5%</div> -->
        <figure
          :style="{'background-image':'url(' + item.image + ')'}"
          class="bg-cover bg-center w-full h-56 rounded-t"
        >
          
        </figure>

        <!-- hovered element -->
        <div
          class="product-item-action absolute z-10"
          :class="[ hover ? 'block' : 'hidden' ]"
        >
          <div
            class="mb-5"
            v-if="item.imported"
          >
            <div class="text-right mb-1">
              <base-button class="block" isSolid variant="success">View imported product</base-button>
            </div>
            <div class="text-right">
              <base-button class="block" isSolid variant="danger">Remove from My Product</base-button>
            </div>
          </div>
          <div v-else>
            <base-button is-fullwidth variant="primary" isSolid>
              <icon-import-product />
              Import to my product
            </base-button>
          </div>
        </div>

      </div>
      <div class="product-item-content">
        <div class="product-item-content-header flex px-2 items-center">
          <div class="product-item-pricing flex-auto">
            <p class="text-primary-500 text-lg">Rp {{ formatMoney(this.item.price) }} <span class="text-sm text-gray-400 line-through">Rp.{{ formatMoney(this.item.priceOld) }}</span></p>
            <!-- <div class="text-sm px-1 bg-danger-500 text-white rounded">5%</div> -->
          </div>
          <div class="flex-none">
            <!-- <base-button size="small">
              <base-icon name="eye" height="16.364" />
            </base-button> -->
          </div>
        </div>
        <div class="product-item-content-main p-2">
          <div class="product-item-title h-10 overflow-hidden">
            <a href="#" :title="this.item.title">
              <span
                v-if="item.wholesale"
                class="label is-pink"
              >
                Wholesale
              </span>
              {{ this.item.title }}
            </a>
          </div>
        </div>
        <div class="product-item-content-footer p-2 border-t-2 border-gray-100">
          <a href="#0" class="product-item-seller flex truncate">
            <img src="https://img12.jd.id/zhipu/nHBfsgAALwAAABsAKfI39AAABbA.png" alt="" class="product-item-seller-pic flex-none mr-2 w-5 rounded shadow border border-gray-300">
            <p class="product-item-seller-name flex-none text-gray-500">
              {{ this.item.seller }}
            </p>
          </a>
        </div>

        <!-- <div
          class="product-item-hover absolute z-10"
          :class="[ hover ? 'block' : 'hidden' ]"
        >
          <template
            v-if="item.imported"
          >
            <base-button is-fullwidth>View detail</base-button>
            <base-button is-fullwidth>Remove</base-button>
          </template>
          <template v-else>
            <base-button is-fullwidth>
              <base-icon name="importProduct" />
              Import to my product
            </base-button>
          </template>
        </div> -->

      </div>
    </div>
  </div>
</template>

<script>
import { BaseButton } from "../ui/Buttons"
import IconFire from "../../../src/assets/icons/fire.svg";
import IconImportProduct from "../../../src/assets/icons/import-product.svg";

import { accountingHelperMixin } from "../../helper/helperMethods"

export default {
  name: "card-item",
  components: {
    BaseButton,
    IconFire,
    IconImportProduct
  },
  data () {
    return {
      hover: false
    }
  },
  mixins: [accountingHelperMixin],
  props: {
    item: {
      type: Object
    }
  }
};
</script>
<style>

.product-item {
  > .card {
    border-color: transparent;

    &:hover {
      @apply shadow-lg;

      & .product-item-cover:after {
        @apply h-20
      }

      & .product-item-cover > img {
        opacity: .90;
      }
    }
  }

  &-title {

    > a {
      @apply text-gray-600 inline-block;
      &:hover {
        @apply text-gray-700 underline;
        text-decoration-color: theme(colors.primary.500);
        
      }
    }

  }

  &.is-imported {
    /* padding-left: .3rem;
    padding-right: .3rem; */

    & > .card {
      box-shadow:  0px 1px 2px 1px theme(colors.success.300);
      @apply border border-success-400;
    }
  } 

  &-content {
    z-index: -1;
  }
}


.product-item-cover {

  &:after {
    content: '';
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,.5) 25%, rgba(255,255,255,0) 100%);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    @apply h-12;
  }

}

.is-hot-product {
  position: absolute;
  top: 13px;
  left: 7px;
  z-index: 1;
  margin-left: 9px;
  background: theme(colors.primary.400);
  background: linear-gradient(90deg, theme(colors.primary.400) 0%, theme(colors.primary.500) 100%);
  padding-left: 16px;
  padding-right: 10px;
  color: white;
  @apply shadow;

  svg {
    fill: theme(colors.primary.500);
    position: absolute;
    width: 22px;
    height: 26px;
    top: -4px;
    left: -9px;
  }
}

.label.is-imported {
  @apply rounded-r-none;
  z-index: 1;
  bottom: .2rem;
  right: 0;
}

.product-item-action {
  @apply p-2;
  bottom: .25rem;
  width: 100%;
}
</style>

