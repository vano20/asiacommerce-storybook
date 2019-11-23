import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/styles/main.css";
import vSelect from "vue-select"

import LayoutBasic from "./views/layouts/LayoutBasic";
import LayoutHasAuth from "./views/layouts/LayoutHasAuth";
import Affix from 'vue-affix';
import { VueResponsiveComponents } from "vue-responsive-components"
// import StickySidebar from "sticky-sidebar";

Vue.component("vue-select", vSelect);
Vue.component("basic-layout", LayoutBasic);
Vue.component("has-auth-layout", LayoutHasAuth);
Vue.use(Affix);
Vue.use(VueResponsiveComponents)

// Object.defineProperty(Vue.prototype, "$StickySidebar", { value: StickySidebar });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
