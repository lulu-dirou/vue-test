export default {
  state: {
    KeyWordZcfw: "好"
  },
  getters: {
    listPageTotal(state){
      return Math.ceil( state.listTotal / state.listPageSize )
    }
  },
  mutations: {
    changeListPageNo(state,val){
      state.listPageNo = val
    },
    changeListkeyWord(state,val){
      state.listkeyWord = val
    }
  },
  actions: {

  },
}