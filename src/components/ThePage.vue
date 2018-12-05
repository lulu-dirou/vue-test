<template>
  <div class="page" v-if="show">
    <ul>
      <span class="page-total">共 {{ total }} 条</span>
      <li class="page-prev" 
        @click="changePage(curPage-1)" 
        :class="curPage===1?'disabled':''">上一页</li>
      <li
        v-for="list in totalPage"
        v-bind:key="list.id"
        v-bind:class="curPage===list?'active':''"
        v-on:click="changePage(list)">{{ list }}</li>
      <li class="page-next" 
        @click="changePage(curPage+1)" 
        :class="curPage===totalPage?'disabled':''">下一页</li>
    </ul>
  </div>
</template>


<script>
export default {
  components: {
  },
  props: {
    total: Number,
    pageSize: Number,
    show: Boolean
  },
  data: function() {
    return {
      curPage: 1
    }
  },
  computed: {
    //计算页数
    totalPage(){
      return Math.ceil(this.total / this.pageSize)
    }
  },
  watch: {
  },
  methods: {
    //改变当页数据方法,发送事件给父组件
    changePage(val){
      if(val!=this.curPage && val>0 && val<=this.totalPage){
        this.curPage = val;
        this.$emit('pageChange',this.curPage)
      }
    }
  },
  created: function(){
  },
  mounted: function(){
  }
}
</script>


<style lang="scss" scoped>
.page {
  margin-top: 40px;
  ul {
    font-size: $font-size-sm;
    text-align: center;
    .page-total {
      margin-right: 10px;
    }
    li {
      display: inline-block;
      user-select: none;
      width: 32px;
      height: 32px;
      line-height: 30px;
      margin-right: 4px;  
      text-align: center;
      cursor: pointer;
      color: #666;
      border: 1px solid #e1e1e1;
      @include theme_bd(neutral-border);
      @include radius(4px);
      &.page-prev,&.page-next {
        width: 60px;
      }
      &:hover,&.active {
        @include theme_font(primary);
        @include theme_bd(primary);
        @include transition(0.2s);
      }
      &.disabled {
        @include theme_font(neutral-border);
        @include theme_bd(neutral-border);
        @include transition(0.2s);
        cursor: not-allowed;
      }
    }
  }
}
</style>