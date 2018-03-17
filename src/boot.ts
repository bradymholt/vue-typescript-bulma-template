import Vue from 'vue'
import App from './App.vue'
import Router from './router/index'

Vue.config.productionTip = false

let v = new Vue({
  el: "#app",
  router: Router,
  components: { App },
  template: `<App/>`
});
