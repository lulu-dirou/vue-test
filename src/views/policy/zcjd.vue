<template>
  <div class="zcjd">
    <ul class="tabs clear">
      <li 
        v-for="(list,index) in tabs" 
        v-bind:key="list.id"
        v-bind:class="num===index?'active':''"
        v-on:click="changeActive(index)">{{ list }}</li>
    </ul>
    <div class="tab-content">
      <list-zcdmjd v-if="num===0?'true':''" class="list-4-child" :thePageShow="true"></list-zcdmjd>
      <div v-if="num===1?'true':''"></div>
      <list-wzjd v-if="num===2?'true':''" class="list-4-child" :thePageShow="true"></list-wzjd>
    </div>
  </div>
</template>


<script>
import ListZcdmjd from '../../components/ListZcdmjd.vue'
import ListWzjd from '../../components/ListWzjd.vue'

export default {
  components: {
    'list-zcdmjd': ListZcdmjd,
    'list-wzjd': ListWzjd,
  },
  props: {
  },
  data: function() {
    return {
      tabs: ['动漫图解','直播/回放','文字解读'],
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
  },
  mounted: function(){
  }
}
</script>


<style lang="scss" scoped>
.zcjd {
  padding: 30px;
  margin-bottom: 40px;
  background-color: #fff;
  .tabs {
    margin-bottom: 30px;
    border-bottom: 1px solid #e1e1e1;
    text-align: right;
    li {
      display: inline-block;
      padding: 15px 0;
      margin: 0 30px;
      text-align: center;
      border-bottom: 3px solid #fff;
      @include theme_font(info);
      cursor: pointer;
      &.active {
        @include theme_font(primary);
        @include theme_bd(primary);
      }
    }
  }
}
</style>