<template>
  <div class="bg-gray-100 cart-variant-item">
    <div class="cart-variant-item-inner flex px-4 items-center py-3 rounded">
      <div class="flex-none self-start">
        <input type="checkbox">
      </div>
      <div class="flex-none self-start">
        <div class="w-16 h-16 bg-gray-500">

        </div>
      </div>
      <div class="flex-auto">
        <p><span class="text-gray-600">Variation label 1: </span>Small size with long sleeve</p>
        <p><span class="text-gray-600">Variation label 2: </span>Another value of variation label 2</p>
        
        <div class="mt-1">
          <p>
            <span class="bg-gray-200 text-gray-600 px-1 rounded mr-3">Costs</span>
            <span class="text-gray-600">Product: </span>
            IDR 421.576,32
            <span class="text-gray-600 ml-3">Logistic: </span>
            IDR 150.000,00
            <span class="text-gray-600 ml-3">Landed: </span>
            IDR 571.576,32
          </p>
        </div>
      </div>
      <div class="flex-none">
        <input-number is-stacked :value="23"/>
      </div>
      <div class="flex-none text-right">
        <p>
          <span class="text-gray-600">Subtotal cost</span><br>
          IDR 512.845.231,75
        </p>
      </div>
    </div>
  </div>
  
</template>

<script>
import { InputNumber } from "../../components/ui/Inputs";
export default {
  name: "CartVaraiantItem",
  components: {
    InputNumber
  }
}
</script>

<style lang="css" scoped>
.cart-variant-item {
  background-color: theme(colors.gray.100).6;

  & > &-inner {
    @apply -mx-2;

    > [class*="flex-"] {
      @apply px-2;
    }
  }
}

</style>