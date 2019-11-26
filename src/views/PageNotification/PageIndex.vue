<template>
  <div class="page-notification">
    <!-- <notification-item /> -->
    <div class="md:w-4/5 lg:3/5 mx-auto shadow bg-white my-8 rounded-lg">
      <div class="px-4 py-3 flex items-center border-b border-gray-200">
        <p
          class="flex-auto text-gray-600 md:text-lg"
        >
          You have <strong class="text-gray-700">12</strong> unread nofication
        </p>
        <div class="flex-none">
          <a href="" class="">
            Mark all as read
          </a>
        </div>
      </div>
      <notification-item
        v-for="item in items"
        :key="item.id"
        :item="item"
        :type="item.type"
        :is-read="item.read"
      />
      <div class="px-4 py-3">
        <a href="" class="text-center block">Show more</a>
      </div>
    </div>
  </div>
</template>

<script>
import NotificationItem from "../../components/notifications/NotificationItem";
import mockJson from "../../mocks/notifications.json";
export default {
  name: "PageNotification",
  components: {
    NotificationItem
  },
  props: {

  },
  data: () => {
    return {
      items: mockJson
    }
  }
}
</script>

<style>

</style>