<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
   <!--  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
   home!!!!!!!!!!
   <p v-for="result in results" v-bind:key="result.id" pageSize="2"> {{ result.zczt }}  {{ result.fbsj }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

// export default {
//   name: "home",
//   components: {
//     HelloWorld
//   }
// };

export default {
    props: [
      'pageSize',
      'pageNo'
    ],
    data : function(){
      return {
        results:[]
      }
    },
    // created(){
    //     this.$http.get('', null, mys => {
    //         console.log(mys)
    //     })
    // }
    created() {
          // this.$http.get("http://jsonplaceholder.typicode.com/users").then(response => {
          //   this.results = response.data;
          //   //console.log(this.results)
          // })

   

//           this.$http.post('http://183.237.175.100:8080/GEService/qyfwpt/zcfw/listZcfw?pageSize=5&pageNo=1')
// .then(function (response) {
// console.log(response);
// })
// .catch(function (error) {
// console.log(error);
// });
   
     this.$http.post('/api/qyfwpt/zcfw/listZcfw?pageSize=10&pageNo=1')
  .then(response => {
            this.results = response.data.body.list;
            //console.log(this.results)
          })





   }


}


</script>
