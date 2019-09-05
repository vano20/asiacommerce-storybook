<template>
  <div class="p-4" style="width: 400px;">
    <message closable>
      <template slot="header">
        Default header looks like this
      </template>
      Default content here
    </message>
    <message variant="primary">
      primary here
    </message>
    <message variant="success">
      <template slot="header">
        this header
      </template>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto explicabo odit voluptatem fugiat debitis consequatur dignissimos dolore blanditiis eaque maiores eum eveniet odio vero, esse beatae aliquid enim ipsam dolor?
    </message>
  </div>
</template>

<script>
import AppMessage from "../src/components/ui/AppMessage.vue";

export default {
  name: "messageStory",
  components: {
    message: AppMessage
  }
}
</script>

<style>

</style>