<template>
  <div class="page-notification">
    <!-- <notification-item /> -->
    <div class="w-3/5 mx-auto shadow bg-white my-8 rounded-lg">
      <div class="post__item" v-responsive="{ small: el => el.width <= 440 }">
        <div class="post__text">responsive</div>
      </div>
      <div class="px-4 py-3 flex items-center border-b border-gray-200">
        <p class="flex-auto text-gray-600 text-lg">
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
export default {
  name: "PageNotification",
  components: {
    NotificationItem
  },
  props: {

  },
  data: () => {
    return {
      items: [
        {
          id: 1,
          type: "info",
          read: false,
          description: "Long ago, the mice had a general council to consider what measures they could take to outwit their common enemy, the Cat.",
          date: "Oct 19, 2019",
          time: "09:08"
        },
        {
          id: 2,
          type: "unpaid",
          read: false,
          description: "A Fox and a Leopard, resting lazily after a generous dinner, amused themselves by disputing about their good looks.",
          date: "Oct 19, 2019",
          time: "09:08"
        },
        {
          id: 3,
          type: "paid",
          read: true,
          description: "The bunch hung from a high branch, and the Fox had to jump for it.",
          date: "Oct 19, 2019",
          time: "09:08"
        },
        {
          id: 4,
          type: "tracking",
          read: true,
          description: "Two Goats, frisking gayly on the rocky steeps of a mountain valley, chanced to meet, one on each side of a deep chasm through which poured a mighty mountain torrent.",
          date: "Oct 19, 2019",
          time: "09:08"
        }
      ]
    }
  }
}
</script>

<style>

</style>