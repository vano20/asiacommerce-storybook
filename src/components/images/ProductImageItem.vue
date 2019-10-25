<template>
  <div class="p-2">
    <div
      class="relative h-48 w-48 rounded border-2 border-primary-400"
      :class="{ 'is-selected': isSelected }"
    >
      <div class="absolute top-0 right-0 p-2">
        <input type="checkbox" />
      </div>
      <div class="absolute bottom-0 left-0 p-2">
        <badge is-solid>
          <dynamic-icon :icon="userImage ? 'user' : 'server'" />
          {{ userImage ? "From user" : "From server" }}
        </badge>
      </div>
      <div class="bg-cover w-full h-full rounded-sm" style="background-image: url(https://placeimg.com/200/220/any)"/>
    </div>
  </div>
</template>

<script>
import DynamicIcon from "../ui/DynamicIcon";
import TheBadge from "../ui/TheBadge";

export default {
  name: "ProductImageItem",
  components: {
    DynamicIcon,
    "badge": TheBadge
  },
  props: {
    userImage: {
      type: Boolean,
      default: false
    },
    isSelected: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="css" scoped>

  

</style>