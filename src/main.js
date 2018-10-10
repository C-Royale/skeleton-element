import Vue from "vue";
import App from "./App.vue";
import SKElement from "./components/index";

Vue.config.productionTip = false;
Vue.use(SKElement);

new Vue({
  render: h => h(App)
}).$mount("#app");
