<template>
  <div class="baseMsg">
    <h1>{{ datas.qymc }}</h1>
    <ul>
      <li class="flex"><span class="label">统一社会信用代码</span><span class="msg">{{ datas.frdbsfzhm }}</span></li>
      <li class="flex"><span class="label">组织机构代码</span><span class="msg">{{ datas.zzjgdm }}</span></li>
      <li class="flex"><span class="label">注册号</span><span class="msg">1</span></li>
      <li class="flex"><span class="label">经营状态</span><span class="msg">{{ datas.jyfwZx }}</span></li>
      <li class="flex"><span class="label">经营地址</span><span class="msg">{{ datas.jydz }}</span></li>
      <li class="flex"><span class="label">公司类型</span><span class="msg">{{ datas.qylx }}</span></li>
      <li class="flex"><span class="label">成立日期</span><span class="msg">{{ datas.clsj }}</span></li>
      <li class="flex"><span class="label">法定代表人</span><span class="msg">{{ datas.frdb }}</span></li>
      <li class="flex"><span class="label">营业期限</span><span class="msg">1</span></li>
      <li class="flex"><span class="label">注册资本</span><span class="msg">{{ datas.zczb }}</span></li>
      <li class="flex"><span class="label">发照日期</span><span class="msg">1</span></li>
      <li class="flex"><span class="label">登记机关</span><span class="msg">{{ datas.ghwdId }}</span></li>
    </ul>
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
      datas: []
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    getApi: function(){
      this.$http.post(
        this.$url.qyzcxx.getQyxxzl
      ).then((res) => {
        this.datas = res.data.body.data
      })
    }
  },
  created: function(){
    this.getApi()
  },
  mounted: function(){
  }
}
</script>


<style lang="scss" scoped>
.baseMsg {
  h1 {
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: normal;
    @include theme_font(neutral);
  }
  li {
    padding: 10px 0;
    border-bottom: 1px solid #e1e1e1;
    @include theme_bd(neutral-divider);
    &:last-child {
      border-bottom: 0;
    }
    .label {
      flex: 0 0 200px;
      @include theme_font(neutral-content,0.8);
    }
    .msg {
      flex: 1;
      @include theme_font(neutral-content);
    }
  }
}
</style>