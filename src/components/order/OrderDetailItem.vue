<template>
  <div class="order-detail-item shadow rounded mx-4 my-3">
    <div class="flex items-stretch">
      <div class="product-description py-3">
        Japanese autumn and winter net red wild wool beret Korean female tide British 蓓 画家 painter hat winter black
      </div>
      <div class="subtotal-qty font-bold items-center text-gray-600">
        18
      </div>
      <div class="subtotal-costs flex items-stretch text-gray-700">
        <div class="subtotal-costs-product">
          <strong class="font-semibold">145.000,0</strong>
        </div>
        <div class="subtotal-costs-logistic">
          <strong class="font-semibold">145.000,0</strong>
        </div>
        <div class="subtotal-costs-landed">
          <strong class="font-semibold">145.000,0</strong>
        </div>
      </div>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderDetailItem"
}
</script>

<style lang="css" scoped>
.order-detail-item {

  &:hover {
    @apply shadow-md;
  }
}

</style>