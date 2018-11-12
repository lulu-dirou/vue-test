import Vue from 'vue'; 
import Vuex from 'vuex';

// 需要注册vuex到vue中
Vue.use(Vuex);


import xSearch from './modules/xSearch.js';//引入xSearch对象


// 注意这里输出的是vuex的store实例对象,main.js引用的时候注意
export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    xSearch
  }
})


