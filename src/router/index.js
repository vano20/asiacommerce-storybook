import Vue from "vue";
import Router from "vue-router";
import mainRoutes from "./main-routes";

import PageCart from "../views/PageCart/PageIndex";
import PageNotification from "../views/PageNotification/PageIndex";

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
  }
];

Vue.use(Router);

const routes = baseRoutes.concat(mainRoutes);

export default new Router({
  mode: "history",
  routes
});
