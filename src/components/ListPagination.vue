<template>
  <div class="pagination">
    <ul>
      <li @click="changePage(currentPage-1)"><span>←</span></li>
      <li>当前{{ cur }}</li>
      <li 
        v-for="(list,index) in totalPage" 
        :key="list.id" 
        @click="changePage(list)"
        :class="currentPage===index+1?'active':''"
      >
      <span>{{ list }}</span>
      <li @click="changePage(currentPage+1)"><span>→</span></li>
    </ul>
  </div>
</template>


<script >
export default {
  //获取父组件传值
  props: {
    total: Number,
    currentPage: Number,
    pageSize: Number
  },
  data(){
    return {
      cur: this.currentPage
    }
  },
  computed: {
    //计算页数
    totalPage(){
      return Math.ceil(this.total / this.pageSize)
    }
  },
  methods: {
    //改变当页数据方法,发送事件给父组件
    changePage(val){
      if(val!=this.currentPage && val>0 && val<=this.totalPage){
        this.cur = val;
        this.$emit('change',this.cur);
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.pagination {
  margin: 30px 0;
  ul{
    text-align: center;
    li {
      display: inline-block;
      cursor: pointer;
      user-select: none;
      margin: 0 5px;
      @include radius(3px);
      span {
        display: block;
        padding: 3px 6px;
        font-weight: normal;
      }
      &:hover,&.active {
        color: #fff;
        @include theme_bd(primary);
        @include theme_bg(primary);
      }
    }
  }
}
</style>