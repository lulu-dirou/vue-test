<template>
  <div class="member flex">
    <div class="left">
      <div class="msg-box flex-middle">
        <span class="userImg"><img src="../../common/images/userImg.png" alt=""></span>
        <span class="userName">{{ this.$store.state.xLogin.user }}</span>
      </div>
      <nav>
        <ul>
          <li><router-link to="/member/baseMsg">基本信息</router-link></li>
          <li><router-link to="/member/push">推送</router-link></li>
          <li><router-link to="/member/fav">收藏夹</router-link></li>
          <li><router-link to="/member/myLive">我的直播</router-link></li>
          <li><router-link to="/member/setting">个人设置</router-link></li>
        </ul>
      </nav>
    </div>
    <div class="right">
      <router-view></router-view> 
    </div>
  </div>
</template>


<script>
export default {
  components: {
  },
  props: {
  },
  data: function() {
    return {
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
  },
  created: function(){
  },
  mounted: function(){
  }
}
</script>


<style lang="scss" scoped>
.member {
  width: 1200px;
  margin: 20px auto;
  .left {
    flex: 0 0 250px;
    margin-right: 20px;
    .msg-box {
      flex-direction: column;
      padding: 20px;
      margin-bottom: 10px;
      background-color: #fff;
      .userImg {
        img {
          width: 80px;
          height: 80px;
          @include radius(50%);
        }
      }
    }
    nav {
      background-color: #fff;
      li {
        a {
          display: block;
          padding: 18px 30px;
          border-bottom: 1px solid #eee;
          @include theme_font(neutral-content);
          &:hover,&.router-link-active {
            color: #fff;
            @include theme_bg(primary);
          }
        }
      }
    }
  }
  .right {
    flex: 1;
    padding: 50px;
    background-color: #fff;
  }
}
</style>