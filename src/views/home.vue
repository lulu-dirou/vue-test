<template>
  <div class="home">
    <div class="search-box flex-middle">
      <the-search class="search"></the-search>
    </div>
    <div class="content">
      <div class="t1">
        <section class="flex">
          <div class="slide">
            <list-slide></list-slide>
          </div>
          <div class="t1-box">
            <div class="hd clear">
              <span>政企头条</span>
              <em @click="more(0)"><router-link to="/child">MORE</router-link></em>
            </div>
            <div class="bd"><list-qyhd v-bind:popListSize='8'></list-qyhd></div>
          </div>
        </section>
      </div>
      <div class="t2 flex">
        <div class="t2-box">
          <section>
            <div class="hd clear">
              <span>最新政策</span>
              <em @click="more(1)"><router-link to="/child">MORE</router-link></em>
            </div>
            <div class="bd"><list-zxzc v-bind:popListSize='3'></list-zxzc></div>
          </section>
        </div>
        <div class="t2-box">
          <section>
            <div class="hd clear">
              <span class="tabs">
                <dl class="clear">
                  <dd 
                    v-for="(tab,index) in tabs" 
                    v-bind:key="tab.id" 
                    v-bind:class="num===index?'active':''" 
                    v-on:click="changeActive(index)">{{ tab }}</dd>
                </dl>
              </span>
              <em @click="more(num+2)"><router-link to="/child">MORE</router-link></em>
            </div>
            <div class="bd">
              <list-zczb v-bind:popListSize='3' v-show="num===0?true:''"></list-zczb>
              <list-zcdmjd v-bind:popListSize='3' v-show="num===1?true:''"></list-zcdmjd>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import ListSlide from '../components/ListSlide.vue'
import TheSearch from '../components/TheSearch.vue'
import ListQyhd from '../components/ListQyhd.vue'
import ListZxzc from '../components/ListZxzc.vue'
import ListZcdmjd from '../components/ListZcdmjd.vue'
import ListZczb from '../components/ListZczb.vue'

export default {
  components: {
    'list-slide': ListSlide,
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
      tabs:['政策直播','政策解读'],
      num: 0
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
    },
    changeActive: function(val){
      this.num = val;
    }
  },
  created: function(){
  },
  mounted: function(){
  }
}
</script>


<style lang="scss" scoped>

</style>
