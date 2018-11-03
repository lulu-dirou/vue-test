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
      <base-test></base-test>
    </div>
  </div>
</template>

<script>
import "./common/myCss.css";
import TheHead from './components/TheHead.vue'
import TheMenu from './components/TheMenu.vue'
import BaseButton from './components/BaseButton.vue'
import BaseTest from './components/BaseTest.vue'


export default {
  name: 'MyVue',
  components: {
    TheHead,
    TheMenu,
    BaseButton, 
    BaseTest, 

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
