<template>
  <div class="loading-box">
    <div class="loading flex-middle">
      loading...
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
    }
  }
}
</script>


<style lang="scss" scoped>
.loading-box {
  z-index: 99;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(#000,0.5);
  .loading {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -100px;
    margin-top: -50px;
    width: 200px;
    height: 100px;
    background-color: #fff;
  }
}
</style>