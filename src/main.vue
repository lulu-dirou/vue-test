<template>
  <div class="main flex">
    <base-loading></base-loading>
    <the-head></the-head>
    <the-menu></the-menu>
    <div class="theContent clear"> 
      <router-view></router-view>
    </div>
    <the-footer></the-footer>
  </div>
</template>

<script>
import BaseLoading from './components/BaseLoading'
import TheHead from './components/TheHead.vue'
import TheMenu from './components/TheMenu.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  components: {
    'base-loading':BaseLoading,
    'the-head':TheHead,
    'the-menu':TheMenu,
    'the-footer':TheFooter,
  },
  created: function(){
    //默认加载主题
    window.document.documentElement.setAttribute('data-theme', 'theme')
    //测试页面是否存在token
    if(this.$store.state.xLogin.token){
      console.log("token："+this.$store.state.xLogin.token)
    }else{
      console.log("没有token！")
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  flex-direction: column;
  min-width: 1200px;
  height: 100%;
  .theContent {
    flex: auto;
    -webkit-flex: 100%;
    background-color: #f2f4f5;
  }
}
</style>
