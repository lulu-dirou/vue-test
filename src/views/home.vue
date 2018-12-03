<template>
  <div class="home">
    <full-slide class="fullSlide"></full-slide>
    <div class="search-box flex-middle">
      <the-search></the-search>
    </div>
    <div class="content flex">
      <section>
        <div class="hd clear">
          <span>政企头条</span>
          <em @click="more(0)"><router-link to="/child">更多>></router-link></em>
        </div>
        <div class="bd"><list-qyhd v-bind:popListSize='8'></list-qyhd></div>
      </section>
      <section>
        <div class="hd clear">
          <span>最新政策</span>
          <em @click="more(1)"><router-link to="/child">更多>></router-link></em>
        </div>
        <div class="bd"><list-zxzc v-bind:popListSize='3'></list-zxzc></div>
      </section>
      <section>
        <div class="hd clear">
          <span>政策解读</span>
          <em @click="more(2)"><router-link to="/child">更多>></router-link></em>
        </div>
        <div class="bd"><list-zcdmjd v-bind:popListSize='3'></list-zcdmjd></div>
      </section>
      <section>
        <div class="hd clear">
          <span>政策直播</span>
          <em @click="more(3)"><router-link to="/child">更多>></router-link></em>
        </div>
        <div class="bd"><list-zczb v-bind:popListSize='3'></list-zczb></div>
      </section>
    </div>
  </div>
</template>


<script>
import FullSlide from '../components/FullSlide.vue'
import TheSearch from '../components/TheSearch.vue'
import ListQyhd from '../components/ListQyhd.vue'
import ListZxzc from '../components/ListZxzc.vue'
import ListZcdmjd from '../components/ListZcdmjd.vue'
import ListZczb from '../components/ListZczb.vue'

export default {
  components: {
    'full-slide': FullSlide,
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
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    more: function(val){
      this.$store.state.xMore.homeMore = val;
      console.log(this.$store.state.xMore.homeMore)
    }
  },
  created: function(){
  },
  mounted: function(){
  }
}
</script>


<style lang="scss" scoped>
.home {
  position: relative;
  .search-box {
    position: absolute;
    left: 50%;
    top: 150px;
    margin-left: -600px;
    width: 1200px;
    justify-content: flex-end;
  }
  .content {
    flex-wrap: wrap;
    justify-content: space-between;
    position: relative;
    width: 1200px;
    margin: 40px auto;
    margin-top: -80px;
    padding: 20px 40px;
    background-color: #fff;
    section {
      flex: 0 0 48%;
      margin: 20px 0;
      .hd {
        height: 40px;
        line-height: 40px;
        background-image: url(../common/images/home_hd_bg.png);
        span {
          float: left;
          margin-left: 20px;
          font-size: $font-size-lg;
          color: #fff;
        }
        em {
          float: right;
        }
      }
      .bd {
        padding: 20px 0;
      }
    }
  }
}
</style>
