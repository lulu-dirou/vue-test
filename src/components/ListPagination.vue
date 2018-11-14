<template>
  <div class="pagination">
    <ul>
      <li @click="changePage(currentPage-1)"><span>上一页</span></li>
      <li>当前{{ cur }}</li>
      <li 
        v-for="(list,index) in totalPage" 
        :key="list.id" 
        @click="changePage(list)"
        :class="currentPage===index+1?'active':''"
      >
      <em>{{ list }}</em>
      <li @click="changePage(currentPage+1)"><span>下一页</span></li>
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


<style scoped>
.pagination {
  margin: 30px 0;
  font-size: 12px;
  text-align: center;
}
.pagination li {
  display: inline-block;
  margin: 10px 5px;
  font-size: 14px;
  cursor: pointer;
  user-select: none;
}
.pagination li em {
  padding: 5px 5px;
}
.pagination li span {
  padding: 15px 40px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
.pagination li span:hover {
  color: #fff;
  border-color: #1476d1;
  background-color: #1476d1;
}
.pagination li.active {
  color: #fff;
  border-color: #1476d1;
  background-color: #1476d1;
}
</style>