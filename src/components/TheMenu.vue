<template>
    <div class="theMenu">
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
.theMenu {
    width: 100%;
    @include theme_bg(primary);
}
.theMenu ul {
    width: 1200px;
    margin: 0 auto;
}
.theMenu ul li {
  flex: 1;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 15px;
  color: #fff;
}
.theMenu li a {
  font-size: 15px;
  color: #fff;
  display: block;
}
.theMenu li a:hover {
  background: rgba(#fff,0.1);
}
.theMenu li a.router-link-active {
  cursor: pointer;
  @include theme_bg(primary-dark);
}

</style>