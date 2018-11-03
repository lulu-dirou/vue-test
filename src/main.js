import Vue from 'vue'
import Main from './main.vue'
import router from './router.js'// 引入路由

Vue.config.productionTip = false

new Vue({
  router,//引用router
  render: h => h(Main),
}).$mount('#myProject')
