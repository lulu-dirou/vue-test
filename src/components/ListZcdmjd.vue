<template>
  <div class="listZcdmjd">
    <ul class="list-4">
      <li v-for="(list,index) in filterLists" :key="list.id">
        <router-link class="flex" v-bind:to="{path:'/policy/article',query:{id:list.id}}">
          <div class="dot-box"><img src="../common/images/zczb-img-demo.png"></div>
          <div class="msg-box">
            <div class="title">{{ $common.html_decode(list.jdmc) }}</div>
            <div class="time">{{ timeReset(index) }}</div>
            <div class="time">{{ getApiImgUrl(list.id) }}</div>
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
      listTotal: 100,
      listPageSize: 10,
      listPageNo: 1,
      lists: [],
      detailData: '',
      detailFjList: [],
      noData: false,
      imgUrl: ''
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
        this.lists = res.data.body.list,
        this.listTotal = res.data.body.list.length
      })
    },
    getApiImgUrl: function(val){
      this.$http.post(this.$url.zcfw.getZbDetail,{
        jdid: val
      }).then((res) => {
        this.imgUrl = res.data.body.fjList[0].xdlj
        console.log(this.imgUrl);
        //typeof callback === 'function' && callback.call(window,this.imgUrl);
        //return this.imgUrl;
      })
    },
    timeReset: function(val){
      return this.lists[val].fbsj.slice(0,10)
    },
    //分页组件获取当对应API方法
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
.listZcdmjd {
  .list-4 {
    .msg-box {
      .time {
        @include theme_font(neutral-content,0.6);
      }
    }
  }
}
</style>