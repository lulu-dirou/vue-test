<template>
  <footer class="theFooter flex">
    <div class="link">
      <ul class="flex">
        <li>
          <span class="title">政企首页</span>
          <dl>
            <dd>法律声明</dd>
            <dd>官方微信公众号</dd>
            <dd>违规有害信息举报</dd>
          </dl>
        </li>
        <li>
          <span class="title">联系与合作</span>
          <dl>
            <dd>联系我们</dd>
            <dd>用户反馈</dd>
            <dd>常见问题</dd>
          </dl>
        </li>
        <li>
          <span class="title">移动客户端</span>
          <dl>
            <dd>微网站</dd>
            <dd>Android版本</dd>
            <dd>微信</dd>
          </dl>
        </li>
      </ul>
    </div>
    <div class="about">
      <ul>
        <li>
          <span class="title">关注我们</span>
          <dl>
            <dd>新浪微博：@广东奥博</dd>
            <dd>联系客服：在线客服</dd>
            <dd>官方微信：</dd>
          </dl>
        </li>
      </ul>
    </div>
  </footer>
</template>


<script>
</script>


<style lang="scss" scoped>
.theFooter {
  width: 1200px;
  margin: 40px auto;
  .link {
    flex: 1;
    border-right: 1px solid #e1e1e1;
    @include theme_bd(neutral-border);
  }
  .about {
    flex: 0 0 250px;
    margin-left: 20px;
  }
  li {
    margin-right: 60px;
    .title {
      display: block;
      margin-bottom: 20px;
      font-size: $font-size-dfx;
      @include theme_font(neutral-content);
    }
    dd {
      margin-bottom: 5px;
      @include theme_font(neutral-content,0.8);
    }
  }
}
</style>