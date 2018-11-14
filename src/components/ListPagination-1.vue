<template>
  <div class="pagination">
    <ul>
      <li>«</li>
      <li 
        v-for="(list,index) in lists" 
        :key="list.id" 
        @click="jumpPage(list)"
        :class="current===index+1?'active':''"
      >
        {{ list }}
      </li>
      <li>»</li>
      <li>当前{{ current }}</li>
      <li>共{{ lists }}页</li>
      <li>共{{ paginationTotal }}条记录</li>
    </ul>
  </div>
</template>


<script >
export default {
  data(){
    return {
      current: this.paginationPageNo
    }
  },
  computed: {
    lists(){
     return Math.ceil(this.paginationTotal / this.paginationPageSize);
      // return (this.paginationTotal + this.paginationPageSize-1) / this.paginationPageSize)
     // return Math.ceil((this.paginationTotal + this.paginationPageSize-1) / this.paginationPageSize);


    }
  },
  props: {
    paginationTotal: Number,
    paginationPageNo: Number,
    paginationPageSize: Number
  },
  methods: {
    jumpPage(val){
      this.current = val;
      this.$emit('paginationPageChange',this.current)
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
  padding: 10px 10px;
  cursor: pointer;
}
.pagination li:hover {
  background-color: #f2f2f2;
}
.pagination li.active {
  background-color: #e1e1e1;
}
</style>