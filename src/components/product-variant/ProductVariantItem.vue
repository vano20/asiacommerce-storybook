<template>
  <div class="px-4 py-3 -mx-4">
    <div class="flex">
      <div class="flex-none flex mr-4">
        <div class="">
          <input type="checkbox" />
        </div>
        <div class="relative w-24 h-24 ">
          <div class="bg-cover w-full h-full rounded-sm" style="background-image: url(https://placeimg.com/120/110/any)"/>
          <div class="absolute inset-x-auto bottom-0">
            <dynamic-icon icon="eye" /> Edit
          </div>  
        </div>
      </div>
      <div class="flex-auto self-center flex flex-col">
        <div class="flex items-center -mx-2">
          <div class="flex-auto px-2 flex items-center flex-wrap">
            <label class="flex-none mr-2">
              First variation name here
            </label>
            <input-text class="flex-auto" style="flex-basis: 250px;"/>
          </div>
          <div class="flex-grow px-2 text-right" style="flex-basis: 80px;">
            <label for="">
              Price
            </label>
            <input-number
              class="inline-flex"
              :min="0"
              v-model="variation1PriceValue"
            />
          </div>
        </div>
        <div class="flex items-stretch mt-2">
          <div class="flex-auto px-3 py-1 bg-accent-100 rounded-l text-accent-600 flex">
            <p class="flex-auto">
              <span class="inline-flex">Product cost&nbsp;</span>
              <strong class="font-medium inline-flex">IDR 12.556.235,12</strong>
            </p>
            <p class="flex-auto">
              <span class="inline-flex">Logistic cost&nbsp;</span>
              <strong class="font-medium inline-flex">IDR 173.960,86</strong>
            </p>
            <p class="flex-auto">
              <span class="inline-flex">Landed cost&nbsp;</span>
              <strong class="font-medium inline-flex">IDR 196.195,98</strong>
            </p>
          </div>
          <div class="flex-none bg-accent-200 px-3 py-1 rounded-r self-center flex items-center">
            <p class="text-accent-700">
              <span class="inline-flex">Est. Profit&nbsp;</span>
              <strong class="font-medium inline-flex">IDR 106.195,98</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { InputText, InputNumber } from "../ui/Inputs";

export default {
  name: "ProductVariantItem",
  components: {
    InputText,
    InputNumber
  },
  data () {
    return {
      variation1PriceValue: 92000
    }
  }
}
</script>

<style>

</style>