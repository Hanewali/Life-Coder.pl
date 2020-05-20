import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './router.js'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vuetify from '@/plugins/vuetify'

// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)
Vue.use(Vuetify)

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vuetify/dist/vuetify.min.css'

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
  Vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
