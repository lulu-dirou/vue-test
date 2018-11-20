<template>
  <div class="listSbfw">
    <div class="bd">
      <ul class="list-2">
        <li v-for="list in lists" :key="list.id" class="flex-middle">
          <div class="msg-box">
            <div class="title">{{ list.name }}</div>
            <div class="math">￥<b>{{ list.moneyMin }}</b>万-<b>{{ list.moneyMax }}</b>万</div>
            <div class="min">
              <span class="min-label">{{ list.govname }}</span>
              <span class="min-time">申报时间：{{ list.startDate }}</span>
            </div>
          </div>
          <div class="sub-box">
            <button class="btn time">剩余3天</button>
            <button class="btn tag">申报中</button>
          </div>
        </li>
        <li v-if="noSearchData">没有找到你要的结果！</li>
      </ul>
      <list-pagination
        :total='listTotal'
        :currentPage='listPageNo'
        :pageSize='listPageSize'
        @change='listPageChange'
      >
      </list-pagination>
    </div>
  </div>
</template>


<script >
import ListPagination from './ListPagination.vue'

export default {
  components: {
    ListPagination
  },
  data() {
    return {
      listTotal: 35,
      listPageSize: 5,
      listPageNo: 1,
      lists: [],
      searchLists: '',
      noSearchData: false
    }
  },
  //接收父组件传值
  props: {
    listKeyWord: String
  },
  computed: {
  },
  methods: {
    //获取默认API
    getApi() {
      this.$http.post(this.$url.sbfw.sbzt,{
        startindex: this.listPageNo,
        pagesize: this.listPageSize
      }).then((res) => {
        this.lists = res.data.body.list
      })
    },
    //计算搜索数据总数
    getSearchTotal() {
      this.$http.post(this.$url.sbfw.listZcfwSearch,{
        pageSize: 9999,
        pageNo: 1,
        keyWord: this.listKeyWord,
        order: 1
      }).then((res) => {
        this.searchLists = res.data.body.list.length;
        this.listTotal = this.searchLists;
        if( this.searchLists == 0 ){
          this.noSearchData = true
        }
      })
    },
    //获取搜索API
    getApiSearch() {
      this.$http.post(this.$url.sbfw.sbzt,{
        pageSize: this.listPageSize,
        pageNo: this.listPageNo,
        keyWord: this.listKeyWord,
        order: 1
      }).then((res) => {
        this.lists = res.data.body.list;
        this.getSearchTotal()
      })
    },
    //分页组件获取当对应API方法
    listPageChange(val) {
      this.listPageNo = val;
      if(this.listKeyWord){
        this.getApiSearch();
      }else{
        this.getApi();
      }
    },
  },
  watch: {
    //监听输入框是否有值改变
    listKeyWord(){
      this.listPageNo = 1;
      this.getApiSearch();
    }
  },
  created(){
    this.getApi();
  }
}
</script>


<style lang="scss" scoped>

.listZcfw {

    background-color: #fff;
    .hd {
        margin-bottom: 10px;
        height: 40px;
        line-height: 40px;
        font-size: 20px;
        font-weight: 600;
        color: #856751;
        border-bottom: 1px solid #ccc;
    }
    .bd{
    }
}
</style>