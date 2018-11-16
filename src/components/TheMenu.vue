<template>
    <div id="TheMenu">
        <ul class="flex-middle">
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
}
</script>


<style lang="scss" scoped>
#TheMenu {
  @include bg_color($bg-color-theme);
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