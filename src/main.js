import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './router.js'

Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition){
      return savedPosition;
    }
    if(to.hash){
      return {
        selector: to.hash
      }
    }
  }
});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
