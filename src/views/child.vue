<template>
  <div class="child">
    <div class="search-box">
      <div class="search-mid flex">
        <the-search class="serch"></the-search>
      </div>
    </div>
    <div class="content flex">
      <div class="left">
        <div class="navigation">
          <ul>
            <li 
              v-for="(list,index) in tabs" 
              v-bind:key="list.id" 
              v-bind:class="num===index?'active':''" 
              v-on:click="changeActive(index)">{{ list }}</li>
          </ul>
        </div>
      </div>
      <div class="right">
        <list-qyhd v-if="num===0?'true':''" class="list-3-chlid"></list-qyhd>
        <list-zxzc v-if="num===1?'true':''"></list-zxzc>
        <list-zcdmjd v-if="num===2?'true':''"></list-zcdmjd>
        <list-zczb v-if="num===3?'true':''" class="list-4-child"></list-zczb>
      </div>
    </div>
  </div>
</template>


<script>
import TheSearch from '../components/TheSearch.vue'
import ListQyhd from '../components/ListQyhd.vue'
import ListZxzc from '../components/ListZxzc.vue'
import ListZcdmjd from '../components/ListZcdmjd.vue'
import ListZczb from '../components/ListZczb.vue'

export default {
  components: {
    'the-search': TheSearch,
    'list-qyhd': ListQyhd,
    'list-zxzc': ListZxzc,
    'list-zcdmjd': ListZcdmjd,
    'list-zczb': ListZczb
  },
  props: {
  },
  data: function() {
    return {
      tabs:['政企头条','最新政策','政策解读','政策直播'],
      num: 0
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    changeActive(val){
      this.num = val;
    }
  },
  created: function(){
    if(this.$store.state.xMore.homeMore){
      this.num = this.$store.state.xMore.homeMore
    }
  },
  mounted: function(){
  }
}
</script>


<style lang="scss">
.child {
  position: relative;
  .search-box {
    width: 100%;
    background: url(../common/images/child-full-bg.jpg) center 0 no-repeat;
    .search-mid {
      position: relative;
      width: 1200px;
      height: 250px;
      margin: 0 auto;
      .serch {
        position: absolute;
        right: 0;
        top: 70px;
      }
    }
  }
  .content {
    flex-wrap: wrap;
    justify-content: space-between;
    position: relative;
    width: 1200px;
    margin: 40px auto;
    margin-top: -40px;
    background-color: #fff;
    .left {
      flex: 0 0 300px;
      padding: 20px;
      border-right: 1px solid #e1e1e1;
      @include theme_bd(neutral-border);
      .navigation {
        li {
          position: relative;
          height: 50px;
          line-height: 50px;
          padding-left: 20px;
          margin-bottom: 10px;
          font-size: $font-size-lg;
          background-color: #f2f4f6;
          cursor: pointer;
        @include transition(0.1s);
          @include theme_font(neutral-content);
          &:hover {
            color: #fff;
            @include theme_bg(primary);
          }
          &.active {
            @include theme_font(primary);
            @include theme_bg(primary,0.1);
            &:after {
              position: absolute;
              left: 0;
              top: 0;
              width: 5px;
              height: 100%;
              content: '';
              @include theme_bg(primary);
            }
          }
        }
      }
    }
    .right {
      flex: 1;
      padding: 40px;
    }
  }
}
</style>
