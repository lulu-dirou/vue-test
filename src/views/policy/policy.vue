<template>
  <div class="policy">
    <h1>政策服务</h1>
    <div class="search lu-flex">
      <input type="text" v-model="keyword" placeholder="请输入关键字" />
      <button type="button" @click="mySearch(keyword)">搜...索</button>
    </div>
    <list-zcfw :listKeyWord='postkeyword'></list-zcfw>
  </div>
</template>




<script>
import ListZcfw from '../../components/ListZcfw.vue'

export default {
  components: {
    ListZcfw
  },
  data() {
    return {
      keyword: '',
      postkeyword: ''
    }
  },
  methods: {
    mySearch(val) {
      this.postkeyword = val;
    }
  }
}
</script>




<style>
.policy {
  padding: 20px;
}
.policy .search input {
  flex: 1;
  margin: 20px 0;
}
</style>
