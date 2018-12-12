<template>
  <div class="listZxzcTable">
    <table class="list-1-table tc tc-f tc-bb tc-pdt10 tc-pdl10 tc-sd-x">
      <tbody>
        <tr v-for="(list,index) in filterLists" :key="list.id" @click="jumpArticle(list.id)" :title="$common.html_decode(list.zczt)">
          <td class="dot"><span></span></td>
          <td class="max"><span>{{ list.zcly }}</span></td>
          <td class="title"><span>{{ $common.html_decode(list.zczt) }}</span></td>
          <td class="msg"><span><em v-for="bq in bqs(index)" v-bind:key="bq.id">【{{ bq }}】</em></span></td>
          <td class="time">{{ $common.time_slice(list.fbsj) }}</td>
        </tr>
      </tbody>
    </table>
    <div v-if="noData">{{ noDataMsg }}</div>
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
      noDataMsg: '',
      noData: false
    }
  },
  props: {
    popListSize: Number,
    thePageShow: Boolean,
    popZcflid: String
  },
  computed: {
    filterLists: function(){
      return this.lists.slice(0, this.popListSize)
    },
    listZcflid : function(){
      return this.popZcflid
    }
  },
  methods: {
    getApi: function() {
      this.$http.post(this.$url.zcfw.listZcfw,{
        pageSize: this.listPageSize,
        pageNo: this.listPageNo,
        zcflid: this.popZcflid
      }).then((res) => {
        this.noData = false
        this.lists = res.data.body.list
        if(this.lists.length == 0){
          this.noData = true
          this.noDataMsg = '抱歉！没有相关记录'
        }
      }).catch(err=>{
        this.lists= []
        this.noData = true
        this.noDataMsg = '错误了！' + err.message
      })
    },
    listPageChange: function(val) {
      this.listPageNo = val
      this.getApi();
    },
    bqs: function(val){
      return (this.lists[val].zcbqname || '').split(',')
    },
    jumpArticle: function(val){
      this.$router.push({path:'/policy/details',query:{id:val}})
    }
  },
  created: function(){
    this.getApi();
  },
  watch: {
    listZcflid: function(){
      this.getApi();
    }
  }
}
</script>


<style lang="scss" scoped>

</style>