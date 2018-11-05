<template>
  <div id="MyVue">
    <the-head></the-head>
    <div class="menu">
      <the-menu></the-menu>
    </div>
    <div class="content">
      <div class="btn">
        <base-button></base-button>
        <base-button></base-button>
        <base-button></base-button>
      </div> 
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import "./common/myCss.css";
import TheHead from './components/TheHead.vue'
import TheMenu from './components/TheMenu.vue'
import BaseButton from './components/BaseButton.vue'


export default {
  name: 'MyVue',
  components: {
    'the-head':TheHead,
    'the-menu':TheMenu,
    'base-button':BaseButton
  }
}
</script>

<style>
html,body {
    height: 100%;
}
#MyVue {
    height: 100%;
    background-color: #999;
}
#MyVue .menu {
    width: 1200px;
    margin: 0 auto;
}
#MyVue .content {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    background-color: #fff;
}

</style>
