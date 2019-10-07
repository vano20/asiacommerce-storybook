<template>
  <div class="shadow rounded hover:shadow-md bg-white my-2">
    <div class="cart-item-content flex px-4 items-start py-3 rounded">
      <div class="flex-none">
        <input type="checkbox">
      </div>
      <div class="cart-col-description flex-auto">
        <div class="rounded-full bg-gray-100 px-2 inline-block">
          <p class="">Category breadcrumb > Is looks > like this</p>
        </div>
        <p class="text-lg mt-1">A generation of women's long-sleeved round neck shirt 2017 spring and summer shirt Korean version of the white round neck shirt blouse</p>
      </div>
      <div class="cart-col-qty flex-none font-semibold self-center text-lg">
        64
      </div>
      <div class="cart-col-action flex-none self-center">
        <button class="btn is-danger is-medium rounded">
          <dynamic-icon icon="trash" />
        </button>
      </div>
    </div>
    <div class="cart-variants">
      <slot />
    </div>
    <div class="cart-item-footer flex items-center px-4 py-3 bg-gray-100 rounded-b">
      <div class="flex-auto">
        <p class="">
          <strong class="font-semibold text-gray-600 mr-1">Subtotal costs:&nbsp;</strong>
          <span class="text-gray-600 ml-2">
            Product:&nbsp;
          </span>
          IDR 623.346.784,46
          <span class="text-gray-600 ml-2">
            Logistic:&nbsp;
          </span>
          IDR 623.346.784,46
          <span class="text-gray-600 ml-2">
            Landed:&nbsp;
          </span>
          IDR 623.346.784,46
        </p>
      </div>
      <div class="flex-none">
        <button class="btn is-medium rounded">
          Show variants
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import DynamicIcon from "../../components/ui/DynamicIcon";
export default {
  name: "CartItem",
  components: {
    DynamicIcon
  }
}
</script>

<style>

</style>