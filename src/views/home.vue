<template>
  <div class="home">
    <base-loading></base-loading>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
   <!--  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
   home!!!!!!!!!!
   <p v-for="result in results" v-bind:key="result.id" pageSize="2"> {{ result.zczt }}  {{ result.fbsj }}</p>
  </div>
</template>

<script>
import BaseLoading from '../components/BaseLoading'

export default {
  components: {
    BaseLoading
  },
  data: function(){
    return {
      results:[]
    }
  },
  methods: {
    getApi: function(){
      this.$http.post(this.$url.zcfw.listZcfw, {
        pageSize: 10,
        pageNo: 1,
      }).then((res) => {
        this.results = res.data.body.list;
      })
    }
  },
  mounted: function(){
    this.getApi()
  }
}


</script>
