<template>
  <div class="page-cart p-4">
    <div class="px-4 py-3 rounded shadow bg-white font-semibold text-gray-600 mb-4">
      <div class="flex items-center">
        <div class="flex-none">
          <input type="checkbox">
        </div>
        <div class="cart-col-description flex-auto">
          <p>
            Description
          </p>
        </div>
        <div class="cart-col-qty flex-none leading-tight">
          <p>
            Subtotal quantity
          </p>
        </div>
        <div class="cart-col-action flex-none">
          <p>
            Action
          </p>
        </div>
      </div>
    </div>
    <cart-item></cart-item>
    <cart-item>
      <cart-variant-item></cart-variant-item>
      <cart-variant-item></cart-variant-item>
    </cart-item>
  </div>
</template>

<script>
import CartItem from "../../components/carts/CartItem";
import CartVariantItem from "../../components/carts/CartVariantItem";
export default {
  name: "PageCart",
  components: {
    CartItem,
    CartVariantItem
  }
}
</script>

<style lang="css" scoped src="./PageCartStyle.css">
