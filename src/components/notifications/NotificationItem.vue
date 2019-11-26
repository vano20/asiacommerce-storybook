<template>
  <a href=""
    class="notification-item"
    :class="[typeClasses, {'is-unread' : !item.read}]"
  >
    <div class="flex items-center px-4 py-3 border-b border-gray-200 bg-white item-inner">
      <div class="flex-none mr-3">
        <div class="w-16 h-16 bg-gray-200 rounded-lg notification-item-icon-wrapper flex items-center justify-center">
          <dynamic-icon :icon="typeIcon" class="w-8 h-8" />
        </div>
      </div>
      <div class="flex-auto text-gray-700 item-description">
        {{ item.description }}
        <div class="flex items-center">
          <div class="flex-auto flex items-center">
            <span
              class="badge text-sm align-middle inline-block mr-2"
              :class="labelClasses"
            >
              {{ item.type }}
            </span>
            <p class="inline-block text-gray-600 timestamp flex items-center">
              <span class="timestamp-date inline-flex items-center">
                <dynamic-icon icon="calendar"/>
                {{ item.date }}
              </span>
              <span class="px-1">
                |
              </span>
              <span class="timestamp-time inline-flex items-center">
                <dynamic-icon icon="clock" />
                {{ item.time }}
              </span>
            </p>
          </div>
          <div
            v-show="!item.read"
            class="flex-none"
          >
            <base-button href="#" is-link >
              Mark as read
            </base-button>
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
import { BaseButton } from "../ui/Buttons";
import DynamicIcon from "../ui/DynamicIcon";

export default {
  name: "NotificationItem",
  components: {
    BaseButton,
    DynamicIcon
  },
  props: {
    type: {
      type: String,
      default: "info"
    },
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    typeClasses () {
      return "is-" + this.type.toLowerCase();
    },
    typeIcon () {
      if (this.type === "tracking") {
        return "track"
      } else {
        return this.type
      }
    },
    labelClasses () {
      if (this.type === "paid") {
        return "is-success"
      } else if (this.type === "unpaid") {
        return "is-danger"
      } else if (this.type === "tracking"){
        return "is-accent"
      } else {
        return "is-" + this.type
      }
    }
  }
}
</script>

<style lang="css" scoped>
  .notification-item {
    
    &:hover {
      text-decoration: none;

      > .item-inner {
        background: theme(colors.gray.100);
      }
    }

    &.is-unread{

      > .item-inner {
        background: theme(colors.primary.100).7;
      }

      &:hover {
        
        > .item-inner {
          background: theme(colors.primary.100).8;

          .item-description {
            @apply text-gray-800;
          }
        }
      }
    }
    
    &-icon-wrapper {

      .is-info & {
        background: theme(colors.info.100);
        svg {
          @apply w-6 h-6 text-info-400;
        }
      }
      .is-paid & {
        background: theme(colors.success.100);
        svg {
          @apply text-success-400;
        }
      }
      .is-unpaid & {
        background: theme(colors.danger.100);
        svg {
          @apply text-danger-400;
        }
      }
      .is-tracking & {
        background: theme(colors.accent.100);
        svg {
          @apply text-accent-400;
        }
      }
    }

    .timestamp {

      svg {
        width: .8rem;
        height: .8rem;
        margin-right: 4px;
      }
      &-date {
      }
    }
  }
</style>