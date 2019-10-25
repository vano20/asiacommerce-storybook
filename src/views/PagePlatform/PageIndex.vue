<template>
  <div>
    <platform-item />
    <platform-item />
    <button class="btn rounded shadow">
      <dynamic-icon icon="plus" /> Add platform
    </button>
  </div>
</template>

<script>
import DynamicIcon from "../../components/ui/DynamicIcon";
import PlatformItem from "../../components/platforms/PlatformItem";

export default {
  name: "PagePlatform",
  components: {
    DynamicIcon,
    PlatformItem
  }
}
</script>

<style>

</style>