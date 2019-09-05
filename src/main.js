import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/styles/main.css";

import LayoutBasic from "./layouts/LayoutBasic";
import LayoutHasAuth from "./layouts/LayoutHasAuth";

Vue.component("basic-layout", LayoutBasic);
Vue.component("has-auth-layout", LayoutHasAuth);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
