<template>
  <header class="theHead">
    <div class="box flex-middle">
      <div class="logo">
        <h1>佛山市政企大数据分析服务中心</h1>
        <p>FOSHAN CITY SERVICE CENTER OF ENTERPRISE BIG DATA ANALYSIS</p>
      </div>
      <div class="user flex-middle">
        <span class="login">点击登录</span>
        <span class="img"></span>
        <span class="name">张三</span><em>|</em>
        <span class="set">个人中心</span><em>|</em>
        <span class="color flex-middle">
          <i 
            v-for="(color,index) in colors" 
            :key="color.id" 
            @click="changeTheme (color) " 
            :class="colorCur===index+1?'active':''"
          >{{ color }}</i>
        </span><em>|</em>
        <span class="logout">退出</span>
      </div>
    </div>
  </header>
</template>


<script >
export default {
  data(){
    return {
      colors: [1,2,3,4],
      colorCur: 1
    }
  },
  methods: {
    changeTheme (val) {
      var vals = val - 1;
      if (vals==0) {
        vals = ''
      }
      window.document.documentElement.setAttribute('data-theme', 'theme'+vals);
      this.colorCur = val
    }
  },
  computed: {

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
      em {
        margin: 0 10px;
        color: #ccc;
      }
      .login {
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
          cursor: pointer;
          &.active {
            color: #fff;
            @include theme_bg(primary);
          }
        }
      }
    }
  }
}
</style>