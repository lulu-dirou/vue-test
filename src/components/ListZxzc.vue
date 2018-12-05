<template>
  <div class="listZxzc">
    <ul class="list-1">
      <li v-for="(list,index) in filterLists" :key="list.id">
        <router-link v-bind:to="{path:'/policy/article',query:{id:list.id}}">
          <div class="dot-box flex-middle">
            <span class="pt">{{ list.zcly }}</span>
            <span class="time">{{ timeReset(index) }}</span>
          </div>
          <div class="msg-box">
            <div class="title">{{ $common.html_decode(list.zczt) }}</div>
            <div class="label">
              <span v-for="bq in bqs(index)">{{ bq }}，</span>
            </div>
          </div>
        </router-link>
      </li>
      <li v-if="noData">没有找到你要的结果！</li>
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
      listTotal: 35,
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
    getApi: function() {
      this.$http.post(this.$url.zcfw.listZcfw,{
        pageSize: this.listPageSize,
        pageNo: this.listPageNo
      }).then((res) => {
        this.lists = res.data.body.list
      })
    },
    timeReset: function(val){
      return this.lists[val].fbsj.slice(0,10)
    },
    listPageChange: function(val) {
      this.listPageNo = val
      this.getApi();
    },
    bqs: function(val){
      return this.lists[val].zcbqname.split(',')
    }
  },
  created: function(){
    this.getApi();
  }
}
</script>


<style lang="scss" scoped>
.listZxzc {
}
</style>