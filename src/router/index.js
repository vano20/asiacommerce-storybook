import Vue from "vue";
import Router from "vue-router";
import mainRoutes from "./main-routes";

// import mainRoutes from "./main-routes";

const baseRoutes = [
  {
    path: "/signin",
    name: "Signin"
  },
  {
    path: "regsiter",
    name: "Register"
  }
];

Vue.use(Router);

const routes = baseRoutes.concat(mainRoutes);

export default new Router({
  mode: "history",
  routes
});
