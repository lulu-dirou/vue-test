<template>
    <div id="TheMenu">
        <ul class="lu-flex">
            <!-- <li v-bind:class="classObj">首页</li>
            <li v-bind:class="classObj">222</li>
            <li v-bind:class="classObj">333</li>
            <li v-bind:class="classObj">44</li>
            <li v-bind:class="classObj">555</li> -->
            <li v-for="nav in navs" v-bind:class="classObj" v-bind:key="nav.id">{{ nav.title }}</li>
        </ul>
    </div>
</template>


<script >
export default {
  name: 'TheMenu',
  data(){
    return {
      navs: [
        {
          id:1,
          title:'index'
        },
        {
          id:2,
          title:'about'
        },
        {
          id:3,
          title:'work'
        },
        {
          id:4,
          title:'member'
        },
      ]
    }
  }
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
#TheMenu ul li:hover,
#TheMenu ul li.active {
  cursor: pointer;
  background-color: #0154a4;
}

</style>