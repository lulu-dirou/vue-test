<template>
  <div class="child clear">
    <header>
      <div class="header-box">
        <the-search class="serch"></the-search>
      </div>
    </header>
    <article class="flex">
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
        <list-qyhd v-if="num===0?'true':''" class="list-3-child" :thePageShow="true"></list-qyhd>
        <list-zxzc v-if="num===1?'true':''" class="list-1-child" :thePageShow="true"></list-zxzc>
        <list-zcdmjd v-if="num===2?'true':''" class="list-4-child" :thePageShow="true"></list-zcdmjd>
        <list-zczb v-if="num===3?'true':''" class="list-4-child" :thePageShow="true"></list-zczb>
      </div>
    </article>
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

</style>
