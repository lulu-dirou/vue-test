export default {
  state: {
    testMsG: '父组件数据',
    childText: '子组件数据'
  },
  getters: {
  },
  mutations: {
    changeText(state,val){
      state.testMsG = val
    },
    changeChildText(state,val){
      state.childText = val
    }
  },
  actions: {
  },
}