<template>
  <div class="listQyhd">
    <ul class="list-3">
      <li v-for="(list,index) in filterLists" :key="list.id">
        <router-link class="flex-middle" v-bind:to="{path:'/policy/article',query:{id:list.id}}">
          <div class="msg-box flex-middle">
            <span class="label">【{{ list.hdlx }}】</span>
            <span class="title">{{ $common.html_decode(list.hdmc) }}</span>
          </div>
          <div class="sub-box"><span class="time">{{ timeReset(index) }}</span></div>
        </router-link>
      </li>
      <li v-if="noSearchData">没有找到你要的结果！</li>
    </ul>
  </div>
</template>


<script >

export default {
  components: {
  },
  data: function(){
    return {
      lists: [],
      noSearchData: false
    }
  },
  props: {
    popListSize: Number
  },
  computed: {
    filterLists: function(){
      return this.lists.slice(0, this.popListSize)
    }
  },
  methods: {
    getApi: function(){
      this.$http.post(this.$url.qyhdgl.listQyhd,{
      }).then((res) => {
        this.lists = res.data.body.hdList
      })
    },
    timeReset: function(val){
      return this.lists[val].fbsj.slice(0,10)
    }
  },
  created: function(){
    this.getApi();
  }
}
</script>


<style lang="scss">
</style>