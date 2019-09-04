<template>
  <div class="bg-red-100 p-4">
    <input-group>
      <input-text size="small" placeholder="Input group here"  />
    </input-group>
    <input-group icon-inside>
      <template slot="prepend">
        <icon-search />
      </template>
      <input-text placeholder="with icon"  />
    </input-group>
    <input-group>
      <template slot="prepend">
        prepend here
      </template>
      <input-text placeholder="Input group here"  />
      <template slot="append">
        <base-button>Button</base-button>
      </template>
    </input-group>
    <input-group>
      <template slot="prepend">
      <base-button size="small">Prepend Button</base-button>
      </template>
      <input-text size="small" placeholder="Input group here"  />
      <template slot="append">
        <base-button size="small">Append</base-button>
      </template>
    </input-group>
    <input-group>
      <template slot="prepend">
      <base-button size="large" variant="Success">Large Button</base-button>
      </template>
      <input-text size="large" placeholder="Input group here"  />
      <template slot="append">
        <base-button size="large" variant="info">Append</base-button>
      </template>
    </input-group>
  </div>
</template>

<script>
import { BaseButton, ButtonGroup } from "../src/components/ui/Buttons";
import { InputText, InputGroup } from "../src/components/ui/Inputs";
import IconSearch from "../src/assets/icons/search.svg"

export default {
  name: "InputGroupStory",
  components: {
    BaseButton,
    ButtonGroup,
    InputText,
    InputGroup,
    IconSearch
  }
}
</script>

<style>

</style>