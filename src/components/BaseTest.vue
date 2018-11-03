<template>
  <div id="BaseTest">
    <!-- <p>message1:{{message1}}</p>
    <p>message2:{{message2}}</p> -->
    <!-- <p>{{fullName='chenqingmei'}}</p>
    <div>
      <span v-for="n in 10">{{ n }} </span>
    </div> -->
    <ul>
      <li v-for="value in object">{{ firstName  }}</li>
    </ul>
  </div>
</template>


<script >
export default {
  name: 'BaseTest',
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
    }
  }
}
// export default {
//   name: 'BaseTest',
//   data(){
//     return {
//       firstName : 'LU',
//       lastName : 'leHE',
//     }
//   },
//   computed: {
//     fullName : {
//       get: function(){
//         return this.firstName + ' , ' + this.lastName
//       },
//       set: function(val){
//         var names = val.split(' ');
//         this.firstName = names[0];
//         this.lastName = names[names.length - 1]
//       }
//     }
//   }
// }
</script>


<style scoped>
#BaseTest {
  font-size: 40px;
}
</style>