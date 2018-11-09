<template>
  <div>
    <h1>详情页</h1>
    <h2>{{ results.zczt }}</h2>
    <h6 v-html="results.zcbj"></h6>
  </div>
</template>

<script>
export default {
  data(){
    return {
      results:[]
    }
  },
  created(){
    var newId = this.$route.query.id;
    this.$http.post(this.$url.zcfw.getZcfw,{
      zcid: newId
    }).then((res) => {
      this.results = res.data.body.data
    })
  }
};
</script>

<style>

</style>
