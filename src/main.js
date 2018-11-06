import 'babel-polyfill'//转码支持ES6
import Vue from 'vue'
import Main from './main.vue'
import router from './router/index.js'//引入路由
//import axios from './server/index.js'//引入axios


import axios from 'axios'
import qs from 'qs'
Vue.prototype.$http = axios
Vue.prototype.$qs=qs


Vue.config.productionTip = false

new Vue({
  router,//引用router
  axios,//引用axios
  render: h => h(Main),
}).$mount('#myProject')
