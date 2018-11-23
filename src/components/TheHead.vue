<template>
  <header class="theHead">
    <div class="box flex-middle">
      <div class="logo">
        <h1>佛山市政企大数据分析服务中心</h1>
        <p>FOSHAN CITY SERVICE CENTER OF ENTERPRISE BIG DATA ANALYSIS</p>
      </div>
      <div class="user flex-middle" v-if="showMsg">
        <span class="dl" v-on:click="ModelCtr">点击登录</span>
      </div>
      <div class="user flex-middle" v-if="showMsged">
        <span class="img"></span>
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
      @include theme_font(neutral);
      p {
        font-size: 12px;
      }
    }
    .user {
      span {
        cursor: pointer;
      }
      em {
        margin: 0 10px;
        color: #ccc;
      }
      .dl {
        cursor: pointer;
        @include theme_font(info);
        &:hover {
          text-decoration: underline;
        }
      }
      .img {
        width: 40px;
        height: 40px;
        margin-right: 10px;
        @include radius(40px);
        background-color: #ccc;
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