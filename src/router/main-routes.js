import PageCatalog from "@/views/PageCatalog/PageIndex";
import PageMyProduct from "@/views/PageMyProduct/PageIndex"

export default [
  {
    path: "/",
    title: "Catalog",
    icon: "catalog",
    alias: "/catalog",
    name: "PageCatalog",
    meta: { layout: "has-auth" },
    component: PageCatalog
  },
  {
    path: "/my-product",
    title: "My Product",
    icon: "my-product",
    name: "PageMyProduct",
    meta: { layout: "has-auth" },
    component: PageMyProduct
  },
  {
    path: "/my-order",
    title: "My Order",
    icon: "my-order",
    name: "PageMyOrder",
    meta: { layout: "has-auth" },
    // component: () => import("@/views/PageMyOrder/PageIndex.vue")
  },
  {
    path: "/platforms",
    title: "Platforms",
    icon: "platforms",
    name: "PagePlatforms",
    meta: { layout: "has-auth" },
    // component: () => import("@/views/PagePlatforms/PageIndex.vue")
  },
  {
    path: "/tracking",
    title: "Tracking",
    icon: "tracking",
    name: "PageTracking",
    meta: { layout: "basic" },
    // component: () => import("@/views/PagePlatforms/PageIndex.vue")
  },
  {
    path: "/setting",
    title: "Setting",
    icon: "setting",
    name: "PageSetting",
    meta: { layout: "has-auth" },
    // component: () => import("@/views/PagePlatforms/PageIndex.vue")
  }
];
