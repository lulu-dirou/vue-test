<template>
  <div class="ArticleList2">
    <the-search @searchEvent='searchEvent'></the-search>
    <div class="hd" v-if="HdShow"><span>{{ HdTitle }}</span></div>
    <div class="bd">
      <ul>
        <li v-for="list in results" v-bind:key="list.id">
          <router-link class="lu-flex" v-bind:to="{path:'/policyArticleInfo',query:{id:list.id}}">
            <div class="dot-box"></div>
            <div class="msg-box">
              <div class="msg-title-max"><span>{{ list.zcly }}</span></div>
              <div class="msg-title">{{ list.zczt }}</div>
              <div class="msg-min lu-flex">
                <span class="msg-label">{{ list.zcbqname }}</span>
                <span class="msg-time">{{ list.fbsj }}</span>
              </div>
            </div>
            <div class="sub-box">submit</div>
          </router-link>
        </li>
      </ul>
      <the-pagination
        :total = 'UrlTotal'
        :display = 'UrlPageSize'
        :currentPage = 'UrlPageNo'
        @currentPageChange = 'pagechange'
      >
      </the-pagination>
    </div>
  </div>
</template>


<script >
import ThePagination from './ThePagination.vue'
import TheSearch from './TheSearch.vue'

export default {
  name: 'ArticleList2',
  components: {
    ThePagination,
    TheSearch
  },
  props: {
    HdTitle:String,
    HdShow:Number,
  },
  data(){
    return {
      UrlTotal: 30,
      UrlPageSize: 5,
      UrlPageNo: 1,
      UrlkeyWord: [],
      results: []
    }
  },
  computed: {
    UrlTotalSearch(){
      return this.results.length;
    }
  },
  methods: {
    getApi(){
      this.$http.post(this.$url.zcfw.listZcfw,{
        pageSize: this.UrlPageSize,
        pageNo: this.UrlPageNo
      }).then((res) => {
        this.results = res.data.body.list
      })
    },
    getApiSearch(){
      this.$http.post(this.$url.zcfw.listZcfwSearch,{
        pageSize: this.UrlPageSize,
        pageNo: this.UrlPageNo,
        keyWord: this.UrlkeyWord,
        order: 1
      }).then((res) => {
        this.results = res.data.body.list
      })
    },
    pagechange(val){
      this.UrlPageNo = val;
      // axios请求, 向后台发送 currentPage, 来获取对应的数据
      this.getApiSearch();
    },
    searchEvent(val){
      this.UrlkeyWord = val;
      this.UrlTotal = this.UrlTotalSearch;
      //this.UrlPageSize = 9999;
      console.log('关键字有吗'+this.UrlkeyWord);
      console.log('总数'+this.UrlTotalSearch);
      this.getApiSearch();
    }
  },
  mounted(){
    this.getApi();
  }
}
</script>


<style scoped>
.ArticleList2 .hd {
  margin-bottom: 10px;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  font-weight: 600;
  color: #856751;
  border-bottom: 1px solid #ccc;
}
.ArticleList2 li {
  align-items: center;
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid #eee;
}
.ArticleList2 li .dot-box {
  flex: 0 0 30px;
  margin-right: 10px;
}
.ArticleList2 li .msg-box {
  flex: 1;
}
.ArticleList2 li .msg-box .msg-title-max {
  margin: 10px 0;
  font-size: 14px;
  color: #999;
}
.ArticleList2 li .msg-box .msg-title-max span {
  padding: 2px 10px;
  background: rgba(0,0,0,0.05);
}
.ArticleList2 li .msg-box .msg-title {
  font-size: 14px;
  color: #666;
}
.ArticleList2 li .msg-box .msg-min {
  align-items: center;
  font-size: 12px;
  color: #999;
}
.ArticleList2 li .msg-box .msg-min .msg-label {
  margin-right: 5px;
  color: #6BAEAB;
}
.ArticleList2 li .sub-box {
  margin-left: 10px;
}
</style>