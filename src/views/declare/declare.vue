<template>
  <div class="declare pages">
    <header>
      <div class="box flex-middle">
        <h1>申诉<span>@this:主要负责介绍申诉相关服务内容，包含查进度、看通知、读政策</span></h1>
        <div class="search flex">
          <input type="text"/>
          <button type="button">搜...索</button>
        </div>
      </div>
    </header>
    <section>
      <list-sbfw></list-sbfw>
    </section>
  </div>
</template>


<script>
import ListSbfw from '../../components/ListSbfw.vue'

export default {
  components: {
    ListSbfw
  }
}
</script>


<style lang="scss" scoped>
</style>
