<template>
  <div class="policy pages">
    <header>
      <div class="box flex-middle">
        <h1>政策服务<span>@this:主要负责介绍政策相关服务内容</span></h1>
        <div class="search flex">
          <input type="text" v-model="keyword"/>
          <button type="button" @click="mySearch(keyword)">搜...索</button>
        </div>
      </div>
    </header>
    <section>
      <list-zcfw :listKeyWord='postkeyword'></list-zcfw>
    </section>
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




<style lang="scss" scoped>
</style>
