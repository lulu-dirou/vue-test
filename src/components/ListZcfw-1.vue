<template>
  <div class="listZcfw">
    <div class="bd">
      <ul>
        <li v-for="list in lists" :key="list.id">
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
            <div class="sub-box">{{ listTotalSearch }}</div>
          </router-link>
        </li>
      </ul>
      <list-pagination
        :paginationTotal='listTotal'
        :paginationPageNo='listPageNo'
        :paginationPageSize='listPageSize'
        @paginationPageChange='listPageChange'
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
      listPageSize: 3,
      listPageNo: 1,
      lists: []
    }
  },
  props: {
    listKeyWord: String
  },
  computed: {
    listTotalSearch() {
      return this.lists.length;
    }
  },
  methods: {
    getApi() {
      this.$http.post(this.$url.zcfw.listZcfw,{
        pageSize: this.listPageSize,
        pageNo: this.listPageNo
      }).then((res) => {
        this.lists = res.data.body.list
      })
    },
    getApiSearch() {
      this.$http.post(this.$url.zcfw.listZcfwSearch,{
        pageSize: 1000,
        pageNo: this.listPageNo,
        keyWord: this.listKeyWord,
        order: 1
      }).then((res) => {
        this.lists = res.data.body.list,
        this.listTotal = this.listTotalSearch,
        console.log('查询数量：'+this.listTotal);
        console.log('当页数量：'+this.listPageSize);
      })
    },
    listPageChange(val) {
        this.listPageNo = val;
        this.getApi();

    },
    // listSearchEvent(val) {
    //   this.listKeyWord = val;
    //   this.listTotal = this.listTotalSearch;
    //   console.log('关键字有吗'+this.listKeyWord);
    //   console.log('总数'+this.listTotal);
    //   this.getApiSearch();
    // }
  },
  watch: {
    listKeyWord(){
      this.getApiSearch();
      console.log('输入框内容：'+this.listKeyWord);
    }
  },
  created(){
    this.getApi();
  }
}
</script>


<style scoped>
.listZcfw .hd {
  margin-bottom: 10px;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  font-weight: 600;
  color: #856751;
  border-bottom: 1px solid #ccc;
}
.listZcfw li {
  align-items: center;
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid #eee;
}
.listZcfw li .dot-box {
  flex: 0 0 30px;
  margin-right: 10px;
}
.listZcfw li .msg-box {
  flex: 1;
}
.listZcfw li .msg-box .msg-title-max {
  margin: 10px 0;
  font-size: 14px;
  color: #999;
}
.listZcfw li .msg-box .msg-title-max span {
  padding: 2px 10px;
  background: rgba(0,0,0,0.05);
}
.listZcfw li .msg-box .msg-title {
  font-size: 14px;
  color: #666;
}
.listZcfw li .msg-box .msg-min {
  align-items: center;
  font-size: 12px;
  color: #999;
}
.listZcfw li .msg-box .msg-min .msg-label {
  margin-right: 5px;
  color: #6BAEAB;
}
.listZcfw li .sub-box {
  margin-left: 10px;
}
</style>