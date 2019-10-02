<template>
  <div class="shadow rounded bg-white my-1 ">
    <div class="flex content-center p-4 ">
      <div class="flex-auto pr-6 pl-2">
        <p class="text-xl block text-center mb-2 py-1 bg-gray-100 rounded-full">
          <span class="text-gray-600">Order ID:</span>
          #30239-62843325234
        </p>
        <div class="flex content-center py-1 px-1">
          <div class="w-1/3">
            <span class="text-gray-600 block">
              Ship to
            </span>
            Indonesia
          </div>
          <div class="w-1/3 text-center">
            <span class="text-gray-600 block">
              Shipping Method
            </span>
            Air Cargo
          </div>
          <div class="w-1/3 text-right">
            <span class="text-gray-600 block">
              Est. Weight total
            </span>
            <span class="text-lg font-semibold text-gray-700">912.23 kg</span>
          </div>
        </div>
      </div>
      <div class="flex-none flex-grow">
        <div class="recipient-wrapper">
          <p class="text-gray-600">Recipent</p>
          <p class="text-lg">Arnold Schwarzneger <span class="text-gray-600">(PT. MAJU TERUS PANTANG MUNDUR)</span></p>
          <p>Jl. Gembong Sawah No. 66 Simorkerto, Surabaya - Jawa Timur <br> Indonesia <span class="text-gray-700">(Pos Code: 952394123)</span></p>
        </div>
      </div>
    </div>

    <div class="pt-2">
      <div class="flex items-center font-semibold mx-4">
        <div class="product-description flex-auto text-gray-600">
          Product description
        </div>
        <div class="subtotal-qty its-label text-gray-600">
          Subtotal Quantity
        </div>
        <div class="subtotal-costs its-label flex flex-wrap">
          <p class="w-full text-center text-gray-600">
            Subtotal costs (in <span class="font-bold">IDR</span>)
          </p>
          <div class="subtotal-costs-product">
            Product
          </div>
          <div class="subtotal-costs-logistic">
            Logistic
          </div>
          <div class="subtotal-costs-landed">
            Landed
          </div>
        </div>
      </div>
      <order-detail-item></order-detail-item>
      <order-detail-item>
        <order-variant-item></order-variant-item>
        <order-variant-item></order-variant-item>
      </order-detail-item>
    </div>

    <div class="px-4 py-2 bg-gray-100 ">
      <div class="flex items-center">
        <div class="flex-none px-4 -ml-4">
          <p class="text-gray-600">Goods Cost Total</p>
          <p class="text-lg"><span class="font-semibold">IDR</span> 32.333.631,82</p>
        </div>
        <div class="px-2 text-gray-600 text-6xl">
          +
        </div>
        <div class="flex-none px-4">
          <p class="text-gray-600">Custom Charges Total</p>
          <p class="text-lg"><span class="font-semibold">IDR</span> 6.333.631,82</p>
        </div>
        <div class="px-2 text-gray-600 text-6xl">
          +
        </div>
        <div class="flex-none px-4">
          <p class="text-gray-600">International Logistic Cost Total</p>
          <p class="text-lg"><span class="font-semibold">IDR</span> 6.333.631,82</p>
        </div>
        <div class="flex-auto text-right flex items-center">
          <div class="flex-none text-6xl text-gray-600 px-4">
            =
          </div>
          <div class="flex-auto">
            <strong class="text-gray-600">GRAND TOTAL</strong>
            <p class="text-2xl"><span class="font-semibold">IDR</span> 72.240.503.024,21</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderDetailItem from "./OrderDetailItem";
import OrderVariantItem from "./OrderVariantItem";

export default {
  name: "OrderDetailView",
  components: {
    OrderDetailItem,
    OrderVariantItem
  }
}
</script>

<style lang="css" csoped>
  .recipient-wrapper {
    @apply relative;
    padding: .5rem 0 .5rem 1rem;
    
    &:before {
      content: '';
      height: 100%;
      width: 3px;
      position: absolute;
      left: 0;
      top: 0;
      bottom: auto;
      border-radius: 10px;
      background-image: 
      repeating-linear-gradient(
        -50deg,
        white,
        white 4px,
        theme(colors.danger.400) 4px,
        theme(colors.danger.400) 10px,
        white 10px,
        white 14px,
        theme(colors.info.500) 14px,
        theme(colors.info.500) 20px /* determines size */
      );
    }
  }

  .product-description {
    @apply pl-4 flex-auto;
  }
  .subtotal-qty {
    @apply flex-shrink-0 text-center flex justify-center;
    flex-basis: 80px;

    .its-label& {
      @apply leading-tight;
    }
  }

  .subtotal-costs {
    @apply flex-shrink-0;
    flex-basis: 330px;

    &.its-label > [class*='subtotal-costs-'] {
      @apply text-white;
    }

    & > [class*='subtotal-costs-'] {
      @apply w-1/3 px-3 flex items-center;
    }

    & > &-product {
      @apply bg-gray-100;

      .its-label& {
        @apply bg-info-400;
      }
    }
    & > &-logistic {
      @apply bg-gray-200 justify-center;

      .its-label& {
        @apply bg-info-500;
      }
    }
    & > &-landed {
      @apply bg-gray-300 justify-end rounded-r;

      .its-label& {
        @apply bg-info-600 rounded-none;
      }
    }
  }
</style>