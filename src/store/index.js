// 依赖包
import Vue from 'vue' 
import Vuex from 'vuex'
Vue.use(Vuex) //调用Vuex


// 引入自建js
import xSearch from './modules/xSearch.js' //引入xSearch对象
import xLogin from './modules/xLogin.js' //引入xLogin对象
import xLoading from './modules/xLoading.js' //引入xLoading对象
import xMore from './modules/xMore.js' //引入xLoading对象


// 创建Vuex实例
const instance = new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    xSearch,
    xLogin,
    xLoading,
    xMore
  }
})

export default instance


