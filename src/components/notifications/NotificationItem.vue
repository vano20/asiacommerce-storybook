<template>
  <div class="notification-item">
    <div class="flex items-center px-4 py-3 border-b border-gray-200 bg-white">
      <div class="flex-none mr-3">
        <div class="w-16 h-16 bg-gray-200 rounded-lg">

        </div>
      </div>
      <div class="flex-auto">
        flex auto
        <div class="flex items-center">
          <div class="flex-auto">
            <span class="badge text-sm align-middle inline-block mr-2">label here</span>
            <p class="inline-block text-gray-600">
              <span>
                <dynamic-icon icon="pencil" />
                12 October 2019
              </span>
              | 12.42.22
            </p>
          </div>
          <div class="flex-none">
            <base-button href="" is-link >
              Mark as read
            </base-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BaseButton } from "../ui/Buttons";
import DynamicIcon from "../ui/DynamicIcon";

export default {
  name: "NotificationItem",
  components: {
    BaseButton,
    DynamicIcon
  }
}
</script>

<style lang="css" scoped>
  .notification-item {
    border:;
  }
</style>