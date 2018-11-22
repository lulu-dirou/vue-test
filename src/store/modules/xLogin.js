export default {
  state: {
    token: window.sessionStorage.getItem('token'),
    user: window.sessionStorage.getItem('user')
  },
  getters: {
  },
  mutations: {
    //获取token保存到sessionStorage里，token表示登陆状态
    setToken: function(state, data){
      state.token = data
      window.sessionStorage.setItem('token', data)
    },
    //获取user保存到sessionStorage里
    getUser: function(state, data){
      state.user = data
      window.sessionStorage.setItem('user', data)
    },
    //登出,清除tosken
    logout: function(state){
      state.token = null
      state.user = null
      window.sessionStorage.removeItem('token')
      window.sessionStorage.removeItem('user')
    }
  },
  actions: {
  },
}