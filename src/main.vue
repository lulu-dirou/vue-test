<template>
  <div id="MyVue">
    <the-head></the-head>
    <div class="menu">
      <the-menu></the-menu>
    </div>
    <div class="content"> 
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import "./common/myCss.css";
import TheHead from './components/TheHead.vue'
import TheMenu from './components/TheMenu.vue'


export default {
  name: 'MyVue',
  components: {
    'the-head':TheHead,
    'the-menu':TheMenu,
  }
}
</script>

<style>
#MyVue {
}
#MyVue .menu {
    width: 1200px;
    margin: 0 auto;
}
#MyVue .content {
    width: 1200px;
    height: 100%;
    margin: 0 auto 20px auto;
    background-color: #fff;
}

</style>
