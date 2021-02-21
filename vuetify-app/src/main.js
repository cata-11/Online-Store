import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueRes from "vue-resource";
import vuetify from "./plugins/vuetify";
import clamp from "vue-line-clamp";
Vue.config.productionTip = false;
Vue.use(VueRes);
Vue.use(clamp);
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
