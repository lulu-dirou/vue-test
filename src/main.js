import 'babel-polyfill'//转码支持ES6
import Vue from 'vue'
import Main from './main.vue'
import router from './router/index.js'//引入路由


//引入axios
import axios from 'axios'
import http from './api/http.js'
import url from './api/url.js'
Vue.prototype.$http = http
Vue.prototype.$url = url



Vue.config.productionTip = false

new Vue({
  router,//引用router
  axios,//引用axios
  render: h => h(Main),
}).$mount('#myProject')
