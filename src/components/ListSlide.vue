<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide flex-middle" 
      v-for="list in filterLists"
      v-bind:key="list.id"><img v-bind:src="$common.api_baseUrl+list.fmurl" ><span><em>{{ $common.html_decode(list.hdmc) }}</em></span></div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>


<script>
import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper'

export default {
  components: {
  },
  props: {
  },
  data: function() {
    return {
      lists: []
    }
  },
  computed: {
    filterLists: function(){
      return this.lists.slice(0, 5)
    }
  },
  watch: {
  },
  methods: {
    getApi: function(){
      this.$http.post(this.$url.qyhdgl.listQyhd,{
      }).then((res) => {
        this.lists = res.data.body.hdList
      })
    }
  },
  created: function(){
    this.getApi()
  },
  mounted: function(){
    new Swiper('.swiper-container',{
      autoplay: 3000,
      autoplayDisableOnInteraction : false,
      pagination: '.swiper-pagination',
      paginationType: 'fraction',
      observer:true,//修改swiper自己或子元素时，自动初始化swiper
      observeParents:true//修改swiper的父元素时，自动初始化swiper
    })
  }
}
</script>


<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 100%;
  .swiper-slide {
    position: relative;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
    span {
      z-index: 2;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 10px;
      background-color: rgba(#000,0.4);
      em {
        display: block;
        color: #fff;
        @include lines(1);
      }
    }
  }
  .swiper-pagination {
    color: #fff;
    bottom: 50px;
  }
}
</style>