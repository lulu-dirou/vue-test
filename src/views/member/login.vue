<template>
  <div class="reg login clear ">
    <div class="box clear">
      <div class="title"><span>用户登录</span></div>
      <div class="min-box">
        <ul>
          <li>
            <label>用户名：</label>
            <div class="msg-box"><input type="text"/><em class="err">*请输入正确的用户名</em></div>
          </li>
          <li>
            <label>密码：</label>
            <div class="msg-box"><input type="password"/></div>
          </li>
          <li>
            <label>验证码：</label>
            <div class="msg-box"><input type="text"/><button type="button" class="get">获取验证码</button></div>
          </li>
        </ul>
        <button class="submit" type="submit">登 录</button>
        <p class="other flex">
          <router-link to="/member/reg"><span>注册</span></router-link>
          <router-link to=""><span>忘记密码</span></router-link>
        </p>
      </div>
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

</style>