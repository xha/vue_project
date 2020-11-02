// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { sync } from 'vuex-router-sync'
import store from '@/store/store'
import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate'
import en from 'vee-validate/dist/locale/en.json'
import * as rules from 'vee-validate/dist/rules'
/*  import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
/*  import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import Vuetify from 'vuetify'
//  import 'vuetify/dist/vuetify.css'

//  Vue.use(VueMaterial)
//  Vue.use(BootstrapVue)
//  Vue.use(IconsPlugin)

*/

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule])
})

localize('en', en)

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
sync(store, router)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
