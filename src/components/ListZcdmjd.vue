<template>
  <div class="listZcdmjd">
    <ul class="list-4 clear">
      <li v-for="list in filterLists" :key="list.id">
        <router-link class="flex" v-bind:to="{path:'/policy/details_dm',query:{id:list.id}}">
          <div class="dot-box"><img :src="$common.api_baseUrl_fj+'fjid='+list.fjid"></div>
          <div class="msg-box">
            <div class="title">{{ $common.html_decode(list.jdmc) }}</div>
            <div class="time">{{ $common.time_slice(list.fbsj) }}</div>
          </div>
        </router-link>
      </li>
      <li v-if="noData">抱歉！没有相关记录</li>
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
      listPageNo: 1,
      lists: [],
      noData: false
    }
  },
  props: {
    popListSize: Number,
    thePageShow: Boolean
  },
  computed: {
    filterLists: function(){
      return this.lists.slice(0, this.popListSize)
    }
  },
  methods: {
    getApi: function(){
      this.$http.post(this.$url.zcfw.listDmjd,{
        pageSize: this.listPageSize,
        pageNo: this.listPageNo
      }).then((res) => {
        this.lists = res.data.body.list
        this.listTotal = res.data.body.list.length
        if(this.lists.length == 0){
          this.noData = true
        }
      })
    },
    listPageChange(val) {
      this.listPageNo = val
      this.getApi()
    }
  },
  created: function(){
    this.getApi();
  }
}
</script>


<style lang="scss" scoped>
</style>