<template>
  <div class="listSearchZc">
    <div class="search-box flex-middle">
      <input type="text"/>
      <button type="button">查询</button>
    </div>
  </div>
</template>


<script >
export default {

}
</script>


<style lang="scss" scoped>
.listSearchZc {
  .search-box {
    padding: 20px 0;
    background-color: rgba(#fff,1);
    input {
      width: 500px;
      height: 40px;
      padding: 0 10px;
      border: 1px solid #e1e1e1;
      @include radius(2px 0 0 2px);
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