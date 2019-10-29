<template>
  <div class="overflow-auto" style="width: 320px;">
    
    <sidebar-menu-item
      v-for="(menu, idx) in menus"
      :key="idx"
      :item="menu"
    />
 
    <div class="bg-gray-100 p-4 flex items-center">
      <div class="flex-none">
        <figure class="w-8 ">
          <img class="rounded-full" src="https://avatars0.githubusercontent.com/u/1776866?s=460&v=4" alt="">
        </figure>
      </div>
      <div class="flex-auto pl-2">
        <p class="text-sm text-gray-400 leading-tight">Premium member</p>
        <p class="leading-tight">Nanang Budi Utomo</p>
      </div>
    </div>

    <sidebar-menu-item
      v-for="(menu2, idx) in menus2"
      :key="idx+'key'"
      :item="menu2"
    />

    <div class="sidebar-footer mt-4 px-4">
      <div class="pt-1 text-sm text-gray-400 font-medium">
        <a href="" class="inline-block hover:text-gray-600 pr-2">About</a>
        <a href="" class="inline-block hover:text-gray-600 pr-2">Press</a>
        <a href="" class="inline-block hover:text-gray-600 pr-2">Copyright</a>
        <a href="" class="inline-block hover:text-gray-600 pr-2">Contact Us</a>
      </div>
      <div class="pt-1 text-sm text-gray-400 font-medium">
        <a href="" class="inline-block hover:text-gray-600 pr-2">Terms</a>
        <a href="" class="inline-block hover:text-gray-600 pr-2">Privacy Policy & Safety </a>
        <a href="" class="inline-block hover:text-gray-600 pr-2">New Features</a>
      </div>
      <p class="font-medium text-gray-300 pt-2">© 2019 Asiacommerce</p>
    </div>
  </div>
</template>

<script>

const setting = {
  label: "Setting",
  icon: "setting",
  isActive: false,
}

import { SidebarMenuItem } from "../src/components/sidebar"
export default {
  name: "SidebarStory",
  components: {
    SidebarMenuItem
  },
  data: () => {
    return {
      menus: [
        {
          title: "Catalog",
          icon: "catalog"
        },
        {
          title: "My Product",
          icon: "my-product",
          isActive: true,
        },
        {
          title: "My Order",
          icon: "my-order",
        },
        {
          title: "Platforms",
          icon: "platforms",
        },
        {
          isSeparator: true
        },
        {
          title: "Tracking",
          icon: "tracking",
        },
        {
          isSeparator: true
        },
      ],
      menus2: [
        {
          title: "Setting",
          icon: "setting",
        },
      ]
    }
  }
}
</script>

<style>

</style>