<template>
  <div class="reg clear ">
    <!--  -->
    <div class="box clear" v-if="regAShow">
      <div class="title"><span>用户注册</span></div>
      <div class="min-box">
        <ul>
          <li>
            <label>组织机构代码：</label>
            <div class="msg-box"><input type="text"/><em class="err">*请输入正确的组织机构代码</em></div>
          </li>
          <li>
            <label>密码（6-10位）：</label>
            <div class="msg-box"><input type="password"/></div>
          </li>
          <li>
            <label>重复密码：</label>
            <div class="msg-box"><input type="password"/></div>
          </li>
          <li>
            <label>验证码：</label>
            <div class="msg-box"><input type="text"/><button type="button" class="get">获取验证码</button></div>
          </li>
        </ul>
        <button class="submit" type="submit" v-on:click="regA">注 册</button>
        <p class="other flex">
          <router-link to="/member/login"><span>已经有账号</span></router-link>
        </p>
      </div>
    </div>
    <!--  -->
    <div class="box clear" v-if="regBShow">
      <div class="title"><span>请完善企业资料</span></div>
      <div class="min-box">
        <ul>
          <li>
            <label>企业名称：</label>
            <div class="msg-box"><input type="text"/></div>
          </li>
          <li>
            <label>法人代表：</label>
            <div class="msg-box"><input type="text"/></div>
          </li>
          <li>
            <label>组织机构代码(营业执照号)：</label>
            <div class="msg-box"><input type="text"/></div>
          </li>
          <li>
            <label>邮箱：</label>
            <div class="msg-box"><input type="text"/></div>
          </li>
          <li>
            <label>营业执照：</label>
            <div class="msg-box"><button type="button" class="get">附件上传</button></div>
          </li>
        </ul>
        <button class="submit" type="submit" v-on:click="regB">保 存</button>
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
      regAShow: true,
      regBShow: false
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    regA: function(){
      this.regAShow = false,
      this.regBShow = true
    },
    regB: function(){
      this.$router.push({path:'/home'})
    }
  },
  created: function(){
  },
  mounted: function(){
  }
}
</script>


<style lang="scss" scoped>

</style>