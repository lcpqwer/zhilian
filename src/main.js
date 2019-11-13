// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview'
import axios from 'axios'
import 'iview/dist/styles/iview.css'
import 'lib-flexible'

Vue.use(iView)
import './assets/css/home.css'

Vue.config.productionTip = false
Vue.prototype.axios = axios
import qs from 'qs'


Vue.prototype.qs = qs


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
