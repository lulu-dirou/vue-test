<template>
  <div class="ArticleList2">
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
            <div class="sub-box">{{ $store.state.xSearch.listPageNo }}</div>
          </router-link>
        </li>
      </ul>
      <the-pagination></the-pagination>
    </div>
  </div>
</template>


<script >
import ThePagination from './ThePagination.vue'

export default {
  name: 'ArticleList2',
  components: {
    ThePagination,
  },
  props: {
    HdTitle:String,
    HdShow:Number,
  },
  data() {
    return {
      results: []
    }
  },
  computed: {
    currentPageNo(){
      return this.$store.state.xSearch.listPageNo
    },
    currentKeyWord(){
      return this.$store.state.xSearch.listkeyWord
    },
    UrlTotalSearch(){
       return this.results.length;
     }
  },
  methods: {
    getApi(){
      this.$http.post(this.$url.zcfw.listZcfw,{
        pageSize: this.$store.state.xSearch.listPageSize,
        pageNo: this.currentPageNo
      }).then((res) => {
        this.results = res.data.body.list
      })
    },
    getApiSearch(){
      this.$http.post(this.$url.zcfw.listZcfwSearch,{
        pageSize: 10,
        pageNo: 1,
        keyWord: this.currentKeyWord,
        order: 1
      }).then((res) => {
        this.results = res.data.body.list
      });
      console.log('记录'+this.UrlTotalSearch);
    },
  },
  watch: {
    currentPageNo(){
        this.getApi();
    },
    currentKeyWord(){
        this.getApiSearch();
    }
  },
  mounted() {
    this.getApi()
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