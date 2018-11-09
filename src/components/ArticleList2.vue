<template>
  <div class="ArticleList2">
    <div class="hd" v-if="HdShow"><span>{{ HdTitle }}</span></div>
    <div class="bd">
      <ul>
        <li v-for="list in results" v-bind:key="list.id">
          <router-link class="lu-flex" v-bind:to="{path:'/policyArticleInfo',query:{id:list.id}}">
            <div class="dot-box"></div>
            <div class="msg-box">
              <div class="msg-title-max">{{ list.zcly }}</div>
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
    </div>
  </div>
</template>


<script >
export default {
  name : 'ArticleList2',
  props: {
    HdTitle : String,
    HdShow : Number,
    UrlPageSize : Number,
    UrlPageNo : Number
  },
  data(){
    return {
      results:[]
    }
  },
  mounted(){
    this.$http.post(this.$url.zcfw.listZcfw,{
      pageSize: this.UrlPageSize,
      pageNo: this.UrlPageNo
    }).then((res) => {
      this.results = res.data.body.list
    })
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
  margin-right: 10px;
}
.ArticleList2 li .msg-box {
  flex: 1;
}
.ArticleList2 li .msg-box .msg-title {
  margin: 5px 0;
  font-size: 16px;
  color: #666;
}
.ArticleList2 li .msg-box .msg-min {
  align-items: center;
  font-size: 12px;
  color: #999;
}
.ArticleList2 li .msg-box .msg-min .msg-label {
  border: 1px solid #ff6600;
  padding: 2px 4px;
  margin-right: 5px;
  border-radius: 3px;
  color: #ff6600;
}
.ArticleList2 li .sub-box {
  margin-left: 10px;
}
</style>