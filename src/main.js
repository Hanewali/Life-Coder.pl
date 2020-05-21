import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './router.js'
import vuetify from '@/plugins/vuetify'

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
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
