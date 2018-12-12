// 依赖包
import 'babel-polyfill'//转码支持ES6
import Vue from 'vue'
import Md5 from 'js-md5'


// 自建js
import Router from './router/index.js' //引入配置路由,需要挂载点注册
import Store from './store/index.js' //引入配置vuex(store),需要挂载点注册
import Http from './api/http.js' //axios,导入封装好的http对象
import Url from './api/url.js' //axios,导入封装好的url对象
import Common from './common/js/common.js' //导入公用方法



// CSS
import './sass/base.scss' //引用scss,全局变量文件mixin需要在vue.config.js配置
import './sass/table.scss' 
import './common/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'


// 组件
import Main from './main.vue'


//Vue全局引用
Vue.prototype.$http = Http
Vue.prototype.$url = Url
Vue.prototype.$md5 = Md5
Vue.prototype.$common = Common
Vue.config.productionTip = false


//创建挂载点
new Vue({
  router: Router,//注册router
  store: Store,//注册store(vuex)
  render: function(createElement){
    return createElement(Main)
  }
}).$mount('#myProject')
