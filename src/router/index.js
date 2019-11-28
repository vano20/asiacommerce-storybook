import Vue from "vue";
import Router from "vue-router";
import mainRoutes from "./main-routes";

import PageCart from "../views/PageCart/PageIndex";
import PageNotification from "../views/PageNotification/PageIndex";
import PageProductDetail from "../views/PageProductDetail/PageIndex";

// import mainRoutes from "./main-routes";

const baseRoutes = [
  {
    path: "/signin",
    name: "Signin"
  },
  {
    path: "regsiter",
    name: "Register"
  },
  {
    path: "/my-cart",
    name: "PageCart",
    meta: { layout: "has-auth" },
    component: PageCart
  },
  {
    path: "/notification",
    name: "PageNotification",
    meta: { layout: "has-auth" },
    component: PageNotification
  },
  {
    path: "/product-detail",
    name: "PageProductDetail",
    meta: { layout: "has-auth" },
    component: PageProductDetail
  }
];

Vue.use(Router);

const routes = baseRoutes.concat(mainRoutes);

export default new Router({
  mode: "history",
  routes
});
