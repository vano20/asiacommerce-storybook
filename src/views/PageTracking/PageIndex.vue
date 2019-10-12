<template>
  <div class="page-tracking mx-auto w-64 mt-4">
    <div class="bg-white rounded shadow">
      <div class="p-4">
        <input-group>
          <input-text placeholder="Input group here" size="large" />
          <template slot="append">
            <base-button size="large">Button</base-button>
          </template>
        </input-group>
        <!-- <input type="text" class="bg-gray-100">
        <button>Track</button> -->
      </div>
      <div class="p-4 border-t border-b border-gray-200">
        <div class="text-center mt-1">
          <p class="bg-gray-200 px-4 inline-block rounded-full border border-gray-300">
            <span class="text-gray-700">
              Date of shipment:
            </span>
            2019-08-21 : 12.64
          </p>
        </div>
        <div class="flex items-center pt-3 px-2">
          <div class="flex-none">
            <p class="leading-tight">
              <span class="text-gray-600">Origin</span><br>
              Guangzhou, CN
            </p>
          </div>
          <div class="tracking-progress flex-auto mx-10 text-center">
            <div class="tracking-progress-icon">
              <dynamic-icon icon="airplane" />
            </div>
          </div>
          <div class="flex-none">
            <p class="leading-tight text-right">
              <span class="text-gray-600">Destination</span><br>
              Surabaya, ID
            </p>
          </div>
        </div>
      </div>
      <div class="tracking-item-wrapper pt-4">
        <div class="flex items-center px-4 text-gray-600">
          <div class="tracking-date flex-none">
            Date
          </div>
          <div class="tracking-status">
            Status
          </div>
          <div class="tracking-location">
            Location
          </div>
        </div>
      </div>
      <tracking-item />
      <tracking-item />
      <tracking-item />

    </div>
  </div>
</template>

<script>
import TrackingItem from "../../components/trackings/TrackingItem";
import DynamicIcon from "../../components/ui/DynamicIcon";
import { BaseButton, ButtonGroup } from "../../components/ui/Buttons";
import { InputText, InputGroup } from "../../components/ui/Inputs";

export default {
  name: "PageTracking",
  components: {
    TrackingItem,
    BaseButton,
    ButtonGroup,
    InputText,
    InputGroup,
    DynamicIcon
  }
}
</script>

<style lang="css" scoped>
  .page-tracking {
    min-width: 500px;

    >>> .tracking-date {
      @apply flex-none;
      margin-left: 2rem;
      width: 100px;
    }

    >>> .tracking-status {
      @apply flex-auto;
    }

    >>> .tracking-location {
      @apply flex-none text-right;
      width: 100px;
    }

    >>> .tracking-item:last-of-type {
      @apply pb-5;

      &:before {
        content: none;
      }
    }
  }

  .tracking-progress {
    @apply relative;
    margin-top: 4px;

    &:before {
      @apply absolute w-full bg-gray-300 left-0 right-0 rounded-full;
      content: "";
      top: 11px;
      height: 3px;
    }

    &-icon {
      @apply bg-white px-2 rounded-full inline-block relative text-gray-500;

      > svg {
        @apply w-6 h-6;
      }
    }
  }
  
</style>