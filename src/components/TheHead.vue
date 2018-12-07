<template>
  <header class="theHead">
    <div class="box flex-middle">
      <div class="logo">
        <img src="../common/images/logo.png" alt="500*80">
      </div>
      <div class="user flex-middle" v-if="showMsg">
        <button class="btn btn-lg dl" v-on:click="ModelCtr">登录</button>
        <button class="btn btn-lg zc" v-on:click="ModelReg">注册</button>
      </div>
      <div class="user flex-middle" v-if="showMsged">
        <span class="img"><img v-bind:src="this.$store.state.xLogin.userImg"></span>
        <span class="name">{{ qymc }}</span><em>|</em>
        <span class="set"><router-link to="/member">个人中心</router-link></span><em>|</em>
        <span class="color flex-middle">
          <i 
            v-for="(color,index) in colors" 
            :key="color.id" 
            @click="changeTheme (color) " 
            :class="colorCur===index+1?'active':''"
          >{{ color }}</i>
        </span><em>|</em>
        <span class="logout" @click="logouted">退出</span>
      </div>
    </div>
    <login 
      :propsLoginShow="loginShow" 
      @emitModelClose='ModelCtr' 
      @emitMsgChange='msgChange'></login>
  </header>
</template>


<script >
import Login from './Login.vue'
export default {
  components: {
    'login':Login,
  },
  data: function(){
    return {
      loginShow : false,
      colors: [1,2,3,4],
      colorCur: 1,
      showMsg: true,
      showMsged: false
    }
  },
  methods: {
    changeTheme: function(val) {
      var vals = val - 1
      if (vals==0) { vals = ''}
      window.document.documentElement.setAttribute('data-theme', 'theme'+vals)
      this.colorCur = val
    },
    ModelCtr: function(val){
      if(val == false){
        this.loginShow = val;
      }else{
        this.loginShow = true;
      }
    },
    ModelReg: function(){
      this.$router.push({path:'/member/reg'})
    },
    logouted: function(){
      this.$store.commit('logout');
      alert("已退出登录");
      this.showMsg = true;
      this.showMsged = false;
    },
    msgChange: function(val){
      if(this.$store.state.xLogin.token) {
        this.showMsg = val;
        this.showMsged = true;
      }else {
        this.showMsg = true;
        this.showMsged = false;
      }
    }
  },
  computed: {
    qymc: function(){
      return this.$store.state.xLogin.user
    }
  },
  created: function(){
    this.msgChange();
  }
}
</script>


<style lang="scss" scoped>
.theHead {
  @include theme_font(neutral-content);
  background-color: #fff;
  .box {
    width: 1200px;
    height: 80px;
    margin: 0 auto;
    .logo {
      flex: 1;
      font-size: 0;
      img {
        height: 80px;
      }
    }
    .user {
      button {
        margin-left: 10px;
        @include radius(2px);
      }
      span {
        cursor: pointer;
      }
      em {
        margin: 0 10px;
        color: #ccc;
      }
      .dl {
        @include theme_font(primary-light);
        @include theme_bd(primary-light);
      }
      .img {
        width: 40px;
        height: 40px;
        margin-right: 10px;
        @include radius(40px);
        background-color: #ccc;
        img {
          width: 40px;
          height: 40px;
        }
      }
      .name {
        font-weight: 600;
        @include theme_font(info);
      }
      .color {
        i {
          width: 20px;
          height: 20px;
          line-height: 20px;
          margin: 0 5px;
          text-align: center;
          @include radius(20px);
          background-color: #e1e1e1;
          &.active {
            color: #fff;
            @include theme_bg(primary);
          }
        }
      }
      .set .router-link-active {
        font-weight: 600;
        @include theme_font(primary);
      }
    }
  }
}
</style>