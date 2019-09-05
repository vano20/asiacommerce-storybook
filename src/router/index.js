import Vue from "vue";
import Router from "vue-router";

// import mainRoutes from "./main-routes";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      title: "Catalog",
      icon: "catalog",
      alias: "/catalog",
      name: "PageCatalog",
      meta: { layout: "has-auth" },
      component: require("@/views/PageCatalog/PageIndex.vue").default
    },
    {
      path: "/my-product",
      title: "My Product",
      icon: "my-product",
      name: "PageMyProduct",
      meta: { layout: "has-auth" },
      component: () => import("@/views/PageMyProduct/PageIndex.vue")
    }
  ]
});
