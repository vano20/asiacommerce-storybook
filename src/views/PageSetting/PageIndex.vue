<template>
  <div class="page-setting mt-2 mx-auto">

    <!-- <div class="text-center">
      <div class="bg-white border border-gray-300 rounded text-gray-700 inline-block">
        <button class="px-4 py-1 rounded-l">
          Account
        </button>
        <button class="px-4 py-1 bg-primary-100 text-primary-500">
          Privacy
        </button>
        <button class="px-4 py-1 rounded-r">
          Global
        </button>
      </div>
    </div> -->

    <div class="flex">
      <div class="w-1/2 p-4">
        <h6 class="px-2 py-1">Account</h6>
        <div class="bg-white shadow rounded p-6">
          <div class="py-2">
            <div class="relative w-40 h-40 rounded-full border-2 border-gray-200 mx-auto">
              <div
                class="bg-cover absolute w-full h-full rounded-full"
                style="background-image: url(https://i.pravatar.cc/300);"
              />
            </div>
            <div class="-mt-4 relative text-center">
              <button class="btn is-medium rounded">
                <dynamic-icon icon="pencil" />
                Change avatar
              </button>
            </div>
          </div>
          <div class="py-2">
            <div class="py-1">
              <label for="">Username</label>
              <input-group icon-inside>
                <template slot="prepend">
                  <dynamic-icon icon="avatar" />
                </template>
                <input-text placeholder="with icon"  />
              </input-group>
            </div>
            <div class="py-1">
              <label for="">Password</label>
              <input-group icon-inside>
                <template slot="prepend">
                  <dynamic-icon icon="key" />
                </template>
                <input-text placeholder="with icon"  />
              </input-group>
            </div>
          </div>
          <div class="text-right mt-1">
            <button class="btn rounded is-medium mr-2">
              Cancel
            </button>
            <button class="btn rounded is-medium is-primary">
              Update
            </button>
          </div>
        </div>
      </div>
      <div class="w-1/2 p-4">
        <h6 class="px-2 py-1">Global</h6>
        <div class="bg-white shadow rounded p-6">
          <fieldset class="mb-6">
            <label for="currency">Currency: </label>
            <select name="" id="">
              <option value="">IDR</option>
              <option value="">USD</option>
            </select>
          </fieldset>
          <fieldset>
            <label for="currency">Default shipping: </label>
            <select name="" id="">
              <option value="">Indonesia</option>
              <option value="">Phillipine</option>
            </select>
          </fieldset>
        </div>
        <h6 class="px-2 py-1 mt-6">Multiplier</h6>
        <div class="bg-white shadow rounded p-6">
          <fieldset class="mb-6">
            <label for="currency">Multiply: </label>
            <input type="text" placeholder="4212"/>
          </fieldset>
        </div>
        <h6 class="px-2 py-1 mt-6">Privacy: </h6>
        <div class="bg-white shadow rounded p-6">
          <fieldset class="mb-6">
            <label for="currency">Multiply: </label>
            <input type="text" placeholder="4212"/>
          </fieldset>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DynamicIcon from "../../components/ui/DynamicIcon";
import { InputText, InputGroup } from "../../components/ui/Inputs";

export default {
  name: "PageSetting",
  components: {
    DynamicIcon,
    InputGroup,
    InputText
  }
}
</script>

<style lang="css" scoped>
  .page-setting {
    max-width: 800px;
  }
</style>