<template>
  <div class="m-4 inline-block">
    <div class="bg-white flex items-center shadow hover:shadow-md rounded">
      <div class="flex-none bg-accent-100 p-6 rounded-l">
        <span class="text-6xl text-accent-300">
          P
        </span>
      </div>
      <div class="flex-auto px-4">
        <p class="text-lg leading-tight mb-2">
          Platform name<br>
          <a href="#" class="text-base text-gray-600">
            <dynamic-icon icon="link" />
            Link here
          </a>
        </p>
        <button class="btn is-small is-accent rounded">
          button here
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import DynamicIcon from "../../components/ui/DynamicIcon";

export default {
  name: "PlatformItem",
  components: {
    DynamicIcon
  }
}
</script>

<style>

</style>