<template>
  <dropdown-item class="cart-dropdown-item">
    <div class="flex items-center">
      <div class="flex-auto overflow-hidden pr-1">
        <p class="truncate">Car bracket Car phone holder Air outlet gravity bracket In-vehicle navigation bracket R-054</p>
      </div>
      <div class="flex-none text-gray-500">
        <button class="btn is-small rounded is-link is-danger hover:shadow-none">
          <dynamic-icon icon="trash" />
        </button>
        <!-- <button class="delete" /> -->
      </div>
    </div>
    <div class="flex">
      <div class="flex-none">
        <figure class="w-10 h-10 mr-2">
          <img src="https://cbu01.alicdn.com/img/ibank/2018/604/608/9254806406_1436734916.jpg_250x250q80.jpg" alt="">
        </figure>
      </div>
      <div class="flex-auto">
        <div class="flex items-center">
          <div class="flex-auto">
            <p class="text-gray-600">
              <span class="text-gray-500">
                Size:
              </span>
              Extra Large
              <span class="text-gray-500 ml-2">
                Color:
              </span>
              Cardinal yellow
            </p>
            <p class="text-accent-500">
              <span class="text-gray-500">
                Landing cost:
              </span>
              IDR 532.734.977,25
            </p>
          </div>
          <div class="flex-none">
            <p class="text-gray-700 leading-snug text-center">
              <span class="text-gray-500">x</span>
              <span class="text-lg">
                241
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </dropdown-item>
</template>

<script>
import DynamicIcon from "../../components/ui/DynamicIcon"
import { DropdownMenuItem } from "../../components/dropdowns";
export default {
  name: "CartDropdownItem",
  components: {
    "dropdown-item": DropdownMenuItem,
    DynamicIcon
  }
}
</script>

<style>

</style>