<template>
  <div class="lsitSbzt">
    <div class="list-2-area clear">
      <div class="area-box" v-for="(list,index) in lists" :key="list.id">
        <router-link v-bind:to="{path:'/declare/details_sb',query:{id:list.id}}">
          <div class="area">
            <div class="area-head clear">
              <span class="label">{{ list.govname }}</span>
              <button class="btn state" :class="btnState">{{ btnStateMsg }}</button>
            </div>
            <div class="area-content clear">
              <div class="stateTime" :class="stateTimeClass">
                <span>{{ dayState(index) }}</span><em>剩余天数</em>
              </div>
              <div class="msg">
                <div class="money">{{ moneyState(index) }}</div>
                <div class="title">{{ list.name }}</div>
                <div class="time">{{ $common.date_en(list.createdAt) }}</div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
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
      listPageSize: 9,
      listPageNo: 1,
      lists: [],
      noDataMsg: '',
      noData: false,
      btnState: '',
      btnStateMsg: '',
      stateTimeClass: ''
    }
  },
  props: {
    thePageShow: Boolean
  },
  computed: {
  },
  methods: {
    getApi: function(){
      this.$http.post(this.$url.sbfw.sbzt,{
        startindex: this.listPageNo,
        pagesize: this.listPageSize
      }).then((res) => {
        this.lists = res.data.body.list
        if(this.lists.length == 0){
          this.noData = true
          this.noDataMsg = '抱歉！没有相关记录'
        }
      })
    },
    listPageChange: function(val) {
      this.listPageNo = val
      this.getApi();
    },
    moneyState: function(val){
      if(this.lists[val].moneyMin == this.lists[val].moneyMax){
        return '资金支持'
      }else{
        return this.lists[val].moneyMin+'万-'+this.lists[val].moneyMax+'万'
      }
    },
    dayState: function(index){
      //let startTime = this.$common.date_de(this.lists[index].startDate)
      let endTime = this.$common.date_de(this.lists[index].endDate)
      let curTime = this.lists[index].dqsj
      if(endTime>curTime){
        this.btnState = 'active'
        this.btnStateMsg = '申报中'
        this.stateTimeClass = 'active'
        return parseInt((Math.abs(endTime - curTime)) / 3600 / 24 / 1000)
      }else{
        this.btnStateMsg = '已结束'
        return 0
      }
    }
  },
  watch: {
  },
  created: function(){
    this.getApi();
  }
}
</script>


<style lang="scss" scoped>
.list-2-area {
  .area-box {
    float: left;
    width: 33.33%;
    padding: 15px;
    .area {
      position: relative;
      top: 0;
      padding: 5px 15px;
      border: 1px solid #e1e1e1;
      cursor: pointer;
      @include transition(0.2s);
      @include theme_bd(neutral-border);
      &:hover {
        top: -10px;
        @include shadow(0,0,20px,2px);
      }
      .area-head {
        line-height: 50px;
        border-bottom: 1px solid #e1e1e1;
        @include theme_bd(neutral-border);
        margin-bottom: 15px;
        .label {
          float: left;
        }
        .state {
          float: right;
          margin-top: 7px;
          @include theme_font(neutral-disabled);
          @include theme_bg(neutral-disabled,0.1);
          @include theme_bd(neutral-disabled,0.3);
          &.active {
            @include theme_font(primary);
            @include theme_bg(primary,0.1);
            @include theme_bd(primary,0.3);
          }
        }
      }
      .area-content {
        position: relative;
        margin-bottom: 15px;
        .stateTime {
          position: absolute;
          top: 0;
          left: 0;
          width: 55px;
          height: 55px;
          margin-right: 20px;
          text-align: center;
          color: #fff;
          @include radius(5px);
          @include theme_bg(neutral-disabled);
          &.active {
            @include theme_bg(primary);
          }
          span {
            display: block;
            margin-top: 5px;
            font-weight: 600;
            font-size: 24px;
          }
          em {
            font-size: $font-size-sm;
          }
        }
        .msg {
          margin-left: 75px;
          .money {
            @include theme_font(primary);
          }
          .title {
            height: 40px;
            line-height: 20px;
            @include lines(2);
          }
          .time {
            font-size: $font-size-sm;
            @include theme_font(neutral-content,0.6);
          }
        }
      }
    }
  }
}
</style>