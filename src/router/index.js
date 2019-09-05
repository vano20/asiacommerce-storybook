import Vue from "vue";
import Router from "vue-router";

import mainRoutes from "./main-routes";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      children: mainRoutes
    }
  ]
});
