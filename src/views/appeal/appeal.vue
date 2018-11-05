<template>
  <div class="appeal">
    <h1>This is an about page {appeal}</h1>
    <article-list1 HdTitle="ArticleList1"></article-list1>
  </div>
</template>

<script>
import ArticleList1 from '../../components/ArticleList1.vue'
export default {
  components : {
    'article-list1' : ArticleList1
  }
};
</script>

<style>
.appeal {
  padding: 20px;
}
</style>
