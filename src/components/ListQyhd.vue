<template>
  <div class="listQyhd">
    <ul class="list-3">
      <li v-for="(list,index) in filterLists" :key="list.id">
        <router-link class="flex-middle" v-bind:to="{path:'/policy/details',query:{id:list.id}}">
          <div class="msg-box flex-middle">
            <span class="label">【{{ list.hdlx }}】</span>
            <span class="title">{{ $common.html_decode(list.hdmc) }}</span>
          </div>
          <div class="sub-box"><span class="time">{{ timeReset(index) }}</span></div>
        </router-link>
      </li>
      <li v-if="noSearchData">没有找到你要的结果！</li>
    </ul>
    <the-page
      :total="listTotal"
      :pageSize="listPageSize"
      :show="thePageShow"
      @pageChange="listPageChange"></the-page>
  </div>
</template>


<script >
import ThePage from './ThePage.vue'

export default {
  components: {
    'the-page': ThePage
  },
  data: function(){
    return {
      listTotal: 100,
      listPageSize: 10,
      lists: [],
      noSearchData: false
    }
  },
  props: {
    popListSize: Number,
    thePageShow: Boolean
  },
  computed: {
    filterLists: function(){
      return this.lists.slice(0, this.popListSize)
    },
    //分页组件点击截取每页数组数量
    listPageChange: function(val){
      var a = (val-1)*this.listPageSize
      return this.lists.slice(a, a+this.popListSize)
    }
  },
  methods: {
    getApi: function(){
      this.$http.post(this.$url.qyhdgl.listQyhd,{
      }).then((res) => {
        this.lists = res.data.body.hdList
        this.listTotal = res.data.body.hdList.length
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