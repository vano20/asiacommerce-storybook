<template>
  <div class="bg-white shadow rounded my-2">
    <div class="flex px-4 py-3 items-center -ml-4">
      <div class="flex-none">
        <div 
          class="w-1 h-4 bg-primary-500 rounded-r my-1"
        />
        <div 
          class="w-1 h-4 bg-info-500 rounded-r my-1"
        />
      </div>
      <div class="flex-none px-3 rounded">
        <p class="bg-gray-100 px-2 text-center leading-tight text-gray-700">
          <span class="text-sm">
            Mar, 19
          </span>
          <span class="text-2xl block">
            29
          </span>
        </p>
      </div>
      <div class="flex-auto">
        <p class="text-lg">
          <span class="text-gray-600">Order ID: </span>
          324
        </p>
        <p>
          <span class="text-gray-600">Customer name: </span>
          Jean-Claude van Damme
        </p>
      </div>
      <div class="flex-auto">
        <p>
          <span class="block text-gray-600">Total costs</span>
          Rp.52.351.345.845.43
        </p>
      </div>
      <div class="flex-none">
        <button class="btn is-primary is-medium rounded">
          Pay Now
        </button>
      </div>
    </div>

    <div class="flex bg-gray-100 px-4 py-2 items-center rounded-b">
      <div class="flex-auto">
        <p class="mr-4 inline-block">
          <span class="text-gray-600">from:</span> Ali Dropship
        </p>
        <p class="inline-block">
          <span class="text-gray-600">Status:</span>
          <span class="badge is-danger">
            danger
          </span>
          <span class="badge is-info">
            info
          </span>
        </p>
      </div>
      <div class="flex-none">
        <button class="btn is-small is-link rounded">
          View order detail list
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderItem",
}
</script>

<style>

</style>