<template>
  <div id="MyVue">
    <the-head></the-head>
    <the-menu></the-menu>
    <div class="content"> 
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TheHead from './components/TheHead.vue'
import TheMenu from './components/TheMenu.vue'


export default {
  name: 'MyVue',
  components: {
    'the-head':TheHead,
    'the-menu':TheMenu,
  },
  created() {
    //默认加载主题
    window.document.documentElement.setAttribute('data-theme', 'theme')
  }
}
</script>

<style lang="scss" scoped>
</style>
