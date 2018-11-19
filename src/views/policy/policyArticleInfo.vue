<template>
  <div class="details">
    <section>
      <h1>{{ results.zczt }}</h1>
      <p v-html="results.zcbj"></p>
    </section>
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

<style lang="scss" scoped>

</style>
