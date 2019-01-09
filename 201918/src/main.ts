// the Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
// 引入element
import ELement from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import ElementUI from "element-ui";
Vue.use(ElementUI);
Vue.config.productionTip = false;

/* eslint-disable no-new */
// tslint:disable-next-line:no-unused-expression
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
alert(7778888);
