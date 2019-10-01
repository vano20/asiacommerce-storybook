<template>
  <div class="p-10">
    <div class="bg-white shadow rounded">
      <!-- <div class="border-b border-gray-200 font-semibold text-gray-700">
        <div class="px-4 py-3">
          Date & Client Name
        </div>
        <div class="px-4 py-3">
          Order ID & Status
        </div>
        <div class="px-4 py-3">
          Total cost
        </div>
        <div class="px-4 py-3">
          Tracking code
        </div>
        <div class="px-4 py-3">
          Action
        </div>
      </div> -->


      <order-item>
        Kemenyek
      </order-item>

    </div>
  </div>
</template>

<script>
import OrderItem from "../../components/order/OrderItem";

export default {
  name: "PageMyOrder",
  components: {
    OrderItem
  }
}
</script>

<style>

</style>