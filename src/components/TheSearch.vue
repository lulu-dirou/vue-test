<template>
  <div class="theSerch">
    <div class="box flex">
      <input type="text"/>
      <button type="button">查询</button>
    </div>
    <div class="hotWords flex-middle">
      <span>热门搜索：</span>
      <a href="">上市扶持</a>
      <span>，</span>
      <a href="">找商铺</a>
      <span>，</span>
      <a href="">新企业注册</a>
      <span>，</span>
      <a href="">税务办理</a>
      <span>，</span>
      <a href="">人力社保</a>
    </div>
  </div>
</template>


<script >
export default {

}
</script>


<style lang="scss" scoped>
.theSerch {
  .box {
    input {
      width: 350px;
      height: 40px;
      padding: 0 10px;
      border: 1px solid #e1e1e1;
      @include radius(2px 0 0 2px);
      background-color: #fff;
    }
    button {
      width: 100px;
      height: 40px;
      border: 0;
      color: #fff;
      font-size: 16px;
      cursor: pointer;
      @include radius(0 2px 2px 0);
      @include theme_bg(primary);
    }
  }
  .hotWords {
    padding: 10px 0;
    span {
      color: rgba(#fff,0.7);
      @include text-shadow()
    }
    a {
      color: #fff;
      @include text-shadow()
    }
  }
}
</style>