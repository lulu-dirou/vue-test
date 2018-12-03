<template>
  <nav class="theMenu">
    <ul class="flex-middle">
        <!-- <li v-for="nav in navs" v-bind:class="classObj" v-bind:key="nav.id">{{ nav.title }}</li> -->
      <li><router-link to="/home">首页</router-link></li>
      <li><router-link to="/appeal">诉求</router-link></li>
      <li><router-link to="/declare">申报</router-link></li>
      <li><router-link to="/policy">政策</router-link></li>
      <li><router-link to="/message">信息</router-link></li>
    </ul>
  </nav>
</template>


<script >
export default {
  mounted: function(){
    const a = 34;
    const b = 21;
    if(a == b){
      console.log(121212)
    }
  }
}
</script>


<style lang="scss" scoped>
.theMenu {
    width: 100%;
    @include theme_bg(primary);
    ul{
      width: 1200px;
      margin: 0 auto;
      li {
        flex: 1;
        height: 50px;
        line-height: 50px;
        text-align: center;
        a {
          display: block;
          color: #fff;
          font-size: $font-size-lgx;
          cursor: pointer;
          &:hover {
            background: rgba(#fff,0.1);
          }
          &.router-link-active {
            @include theme_bg(primary-dark);
          }
        }
      }
    }
}
</style>