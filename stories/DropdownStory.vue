<template>
  <div>
    <div class="inline-flex">

      <dropdown label="Jancok" trigger-class="juamput">
        <dropdown-item>
          <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
        </dropdown-item>
        <hr class="dropdown-divider">
        <dropdown-item>
          <p>You simply need to use a <code>&lt;div&gt;</code> instead.</p>
        </dropdown-item>
        <hr class="dropdown-divider">
        <dropdown-item href="#">
          This is a link
        </dropdown-item>
        
      </dropdown>
    </div>

    <div class="inline-flex">
      <dropdown label="iki seplit, coookkk" is-split />
    </div>

  </div>
</template>

<script>
import { DropdownMenu, DropdownMenuItem } from "../src/components/dropdowns";
import { BaseButton } from "../src/components/ui/Buttons";

export default {
  name: "DropdownStory",
  components: {
    "dropdown": DropdownMenu, "dropdown-item": DropdownMenuItem,
    BaseButton
  }

}
</script>

<style>

</style>