<template>
  <div class="product-item is-imported w-1/4 p-1">
    <div
      class="card br2 center shadow-md rounded"
    >
      <a
        class="label is-hot-product bg-orange-500 text-white"
        href="#0"
      >
        <base-icon name="fire" height="31.44" />
        Hot Product
      </a>
      <div class="product-item-cover relative">
        <a
          class="label is-imported bg-green-300 absolute text-green-500 text-sm"
          href="#0"
        >
          Imported already
        </a>
        <img
          src="http://placekitten.com/g/600/600"
          class="db w-100 br2 br--top rounded"
          alt="Photo of a kitten looking menacing."
        />
      </div>
      <div class="product-item-content pa2 ph3-ns pb3-ns">
        <div class="product-item-content-header">
          <div class="product-item-pricing px-2">
            <strong class="text-orange-500">Rp94.415.532</strong>
          </div>
        </div>
        <div class="product-item-content-main p-2">
          <div class="product-item-title h-10 overflow-hidden">
            <a href="#" title="Picking up some small pebbles, he dropped them into the pitcher one by one">
              Picking up some small pebbles, he dropped them into the pitcher one by one
            </a>
          </div>
        </div>
        <div class="product-item-content-footer p-2 border-t border-grey-300">
          <a href="#0" class="product-item-seller flex truncate">
            <img src="https://img12.jd.id/zhipu/nHBfsgAALwAAABsAKfI39AAABbA.png" alt="" class="product-item-seller-pic flex-none mr-2 w-5 rounded shadow border border-gray-400">
            <p class="product-item-seller-name flex-none">
              Seller name should be here
            </p>
          </a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import BaseIcon from "./BaseIcon.vue"

export default {
  name: "card-item",
  components: {
    BaseIcon
  },
  props: {
    isImported: {
      type: Boolean
    },
    item: {
      type: Object
    }
  }
};
</script>
<style>

.product-item {
  > .card:hover {
    @apply shadow-lg;
  }

  > .card:hover .product-item-cover:after {
    @apply h-20
  }

  > .card:hover .product-item-cover > img {
    opacity: .90;
  }

  &.is-imported > .card {
    box-shadow: inset 0px 0px 2px 4px theme(colors.green.300);
  }

  &-content {
    z-index: -1;
  }
}


.product-item-cover {
  z-index: -1;

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
  top: 10px;
  left: 6px;
  z-index: 1;
  margin-left: 9px;
  background: theme(colors.orange.400);
  background: linear-gradient(90deg, theme(colors.orange.400) 0%, theme(colors.orange.500) 100%);
  padding-left: 16px;
  padding-right: 10px;
  @apply shadow;

  svg {
    fill: theme(colors.orange.500);
    position: absolute;
    width: 22px;
    height: 26px;
    top: -2px;
    left: -9px;
  }
}

.label.is-imported {
  z-index: 1;
  bottom: 0;
  right: 0;
  padding: 1px 4px;
}
</style>

