<template>
  <div class="order-variant-item flex items-center bg-gray-100 ">
    <div class="product-description py-3 flex">
      <div class="w-16 h-16 relative flex-none">
        <div class="absolute bg-cover w-full h-full " style="background-image: url(https://img.alicdn.com/imgextra/i2/1806083495/O1CN01pixMQz1bgkjJIhOoX_!!1806083495.jpg_800x800q80.jpg)" />
      </div>
      <div class="flex-auto flex">
        <div class="flex-auto variation">
          <p class="text-gray-600">Variation label 1</p>
          <p>12 V Single Speed Carton 1 Electric 1 Charge 1 Accessories</p>
        </div>
        <div class="flex-auto variation">
          <p class="text-gray-600">Variation label 2</p>
          <p>Special edition</p>
        </div>
      </div>
    </div>
    <div class="subtotal-qty font-bold items-center text-gray-700">
      18
    </div>
    <div class="subtotal-costs flex items-stretch">
      <div class="subtotal-costs-product">
        145.000,0
      </div>
      <div class="subtotal-costs-logistic">
        145.000,0
      </div>
      <div class="subtotal-costs-landed font-semibold">
        145.000,0
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderVariantItem"
}
</script>

<style scoped lang="css">
.order-variant-item {

  &:first-of-type {
    margin-top: 4px;
  }

  &:last-of-type {
    @apply rounded-b;
  }
}

.variation {
  @apply px-3;
  flex-grow: 1;
  flex-basis: 0;
}

.subtotal-costs > [class*="subtotal-costs-"] {
  @apply bg-gray-100;
}
</style>