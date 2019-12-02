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
      </div>
      <div class="pt-4 px-4 pb-6 border-t-2 border-b border-gray-200 flex items-center">
        <div class="flex-auto">
          <span class="text-gray-600">Tracking number</span>
          <p class="text-lg">ACN-512345-603</p>
        </div>
        <div class="flex-none pl-4 border-l border-gray-300">
          <span class="text-gray-600">Shipping method</span>
          <p class="text-lg">Ocean Cargo</p>
        </div>
      </div>
      <div class="pt-0 px-4 pb-4 -mt-4 border-gray-200">
        <div class="text-center mt-1">
          <p class="bg-gray-200 px-4 inline-block rounded-full border border-gray-300">
            <span class="text-gray-600">
              Date of shipment:
            </span>
            2019-08-21 | 12.64
          </p>
        </div>
        <div class="w-full pt-4">
          <p class="text-gray-600">Tracking status</p>
          <div class="tracking-progress flex items-center -mr-2">
            <div class="tracking-progress-node is-checked" />
            <div class="tracking-progress-node is-checked" />
            <div class="tracking-progress-node is-checked" />
            <div class="tracking-progress-current">
              <div class="tracking-progress-current-inner rounded-full border border-accent-500 px-3 py-1 items-center text-accent-500 bg-white ">
                <dynamic-icon icon="airplane" class="mr-2"/>
                <p>Handover to courier</p>
              </div>
            </div>
            <div class="tracking-progress-node" />
            <div class="tracking-progress-node" />
            <div class="tracking-progress-node" />
          </div>
        </div>
      </div>
      <div class="border-t">
        <div class="tracking-item-wrapper pt-4">
          <div class="flex px-4 text-gray-600 font-medium">
            <div class="tracking-date flex-none">
              Date
            </div>
            <div class="tracking-status">
              Status
            </div>
          </div>
        </div>
        <tracking-item />
        <tracking-item />
        <tracking-item />
      </div>
      <div class="border-t p-4">
        <p class="text-gray-600 ">Package list</p>
        <div class="package-list">
          <div class="flex items-center text-gray-600 font-medium py-2">
            <div class="flex-none package-list-no">
              Package no.
            </div>
            <div class="package-list-id">
              Order ID
            </div>
          </div>
          <package-list-item />
          <package-list-item />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TrackingItem from "../../components/trackings/TrackingItem";
import PackageListItem from "../../components/trackings/PackageListItem";
import DynamicIcon from "../../components/ui/DynamicIcon";
import { BaseButton, ButtonGroup } from "../../components/ui/Buttons";
import { InputText, InputGroup } from "../../components/ui/Inputs";

export default {
  name: "PageTracking",
  components: {
    TrackingItem,
    PackageListItem,
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
    max-width: 500px;
    width: auto;

    >>> .tracking-date {
      @apply flex-none ml-8;
      width: 140px;
    }

    >>> .tracking-status {
      @apply flex-auto;
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

  &-node {
    @apply w-5 h-1 flex-none relative bg-gray-300;

    &:before {
      @apply absolute w-3 h-3 rounded-full bg-gray-400;
      content: '';
      top: -4px;
    }

    &.is-checked {
      @apply bg-accent-400;

      &:before {
        @apply bg-accent-500;
      }
    }

    &:last-of-type {
      @apply bg-white;
      &:before {
        /* @apply hidden; */
      }
    }
  }

  &-current {
    @apply flex-auto relative;

    &:before {
      @apply h-1 w-full absolute bg-gray-300;
      content: '';
      top: 13px;
    }

    &-inner {
      @apply inline-flex relative ml-1;

      &:before {
        @apply h-1 w-1 absolute bg-accent-400;
        content: '';
        top: 12px;
        left: -5px;
      }
    }
  }
}

.package-list {

  >>> &-no {
    width: 100px;
  }

  >>> &-id {
    
  }
}
  
</style>