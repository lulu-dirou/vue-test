<template>
    <div id="TheMenu">
        <ul class="lu-flex">
            <!-- <li v-for="nav in navs" v-bind:class="classObj" v-bind:key="nav.id">{{ nav.title }}</li> -->
          <li><router-link to="/home">home</router-link></li>
          <li><router-link to="/appeal">appeal</router-link></li>
          <li><router-link to="/declare">declare</router-link></li>
          <li><router-link to="/policy">policy</router-link></li>
          <li><router-link to="/message">message</router-link></li>
        </ul>
    </div>
</template>


<script >
export default {
  // name: 'TheMenu',
  // data(){
  //   return {
  //     navs: [
  //       {
  //         id:1,
  //         title:'index'
  //       },
  //       {
  //         id:2,
  //         title:'about'
  //       },
  //       {
  //         id:3,
  //         title:'work'
  //       },
  //       {
  //         id:4,
  //         title:'member'
  //       },
  //     ]
  //   }
  // }
  // data(){
  //   return {
  //     classObj : {
  //       active : true,
  //       'text-danger' : true,
  //     }
  //   }
  // },
  // data(){
  //   return {
  //     isActive : true,
  //     isErr : true
  //   }
  // },
  // computed: {
  //   classObj : function(){
  //     return {
  //       active : this.isActive && !this.isErr ,
  //       'text-danger' : this.isErr
  //     }
  //   }
  // }
  // computed: {
  //   classObject: function () {
  //     return {
  //       active: this.isActive,
  //     }
  //   }
  // }
}
</script>


<style scoped>
#TheMenu {
  background-color: #1476d1;
}
#TheMenu ul {
  width: 100%;
  align-items: center;
}
#TheMenu ul li {
  flex: 1;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 15px;
  color: #fff;
}
#TheMenu li a {
  font-size: 15px;
  color: #fff;
  display: block;
}
#TheMenu li a:hover {
  background-color: rgba(0,0,0,0.2);
}
#TheMenu li a.router-link-active {
  cursor: pointer;
  background-color: #0154a4;
}

</style>