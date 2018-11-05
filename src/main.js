import Vue from 'vue'
import Main from './main.vue'
import router from './router/index.js'//引入路由
//import axios from './server/index.js'//引入axios


 import axios from 'axios'
// axios.defaults.headers.post['Content-Type']= 'application/x-www-form-urlencoded;charset=UTF-8'
Vue.prototype.$http = axios



Vue.config.productionTip = false

new Vue({
  router,//引用router
  axios,//引用axios
  render: h => h(Main),
}).$mount('#myProject')
