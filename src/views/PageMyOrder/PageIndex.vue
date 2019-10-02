<template>
  <div class="p-10">
    <div class="">
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
      </order-item>
      <order-item>
      </order-item>

      <order-detail-view></order-detail-view>
    
    </div>
  </div>
</template>

<script>
import OrderItem from "../../components/order/OrderItem";
import OrderDetailView from "../../components/order/OrderDetailView";

export default {
  name: "PageMyOrder",
  components: {
    OrderItem,
    "order-detail-view": OrderDetailView
  }
}
</script>

<style>

</style>