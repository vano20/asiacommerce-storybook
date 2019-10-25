import PageCatalog from "../views/PageCatalog/PageIndex";
import PageMyProduct from "../views/PageMyProduct/PageIndex";
import PageMyOrder from "../views/PageMyOrder/PageIndex";
import PagePlatform from "../views/PagePlatform/PageIndex";
import PageTracking from "../views/PageTracking/PageIndex";
import PageSetting from "../views/PageSetting/PageIndex";

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
    component: PageMyOrder
  },
  {
    path: "/platforms",
    title: "Platforms",
    icon: "platforms",
    name: "PagePlatform",
    meta: { layout: "has-auth" },
    component: PagePlatform
  },
  {
    path: "/tracking",
    title: "Tracking",
    icon: "tracking",
    name: "PageTracking",
    meta: { layout: "basic" },
    component: PageTracking
  },
  {
    path: "/setting",
    title: "Setting",
    icon: "setting",
    name: "PageSetting",
    meta: { layout: "has-auth" },
    component: PageSetting
  }
];
