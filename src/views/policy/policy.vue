<template>
  <div class="policy">
    <h1>政策服务</h1>
    <article-list2 
      hd-title="最新政策" 
      :hd-show="1" 
    >
    </article-list2>
  </div>
</template>

<script>
import ArticleList2 from '../../components/ArticleList2.vue'
export default {
  components : {
    'article-list2' : ArticleList2
  }
};
</script>

<style>
.policy {
  padding: 20px;
}
</style>
