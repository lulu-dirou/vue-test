<template>
  <div class="loading-box" v-if="this.$store.state.xLoading.loading">
    <div class="loading flex-middle">
      <div>loading</div>
      <div class="ball"></div>
    </div>
  </div>
</template>


<script>
export default {
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
  .loading {
    flex-direction: column;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -100px;
    margin-top: -50px;
    width: 200px;
    height: 100px;
    background-color: #fff;
    @include shadow(0,0,20px,5px);
    .ball {
      position: relative;
      height: 16px;
      width: 32px;
      &:before,&:after {
        position: absolute;
        left: 0;
        border-radius: 50%;
        width: 16px;
        height: 16px;
        display: block;
        content: '';
      }
      &:before {
        @include theme_bg(primary);
        @include animation(load-1);
        @include keyframes(load-1){
          0% {left: 0;}
          50% {left: 100%;}
          100% {left: 0; }
        }
      }
      &:after {
        @include theme_bg(info);
        @include animation(load-2);
        @include keyframes(load-2){
          0% {left: 100%;}
          50% {left: 0;}
          100% {left: 100%; }
        }
      }
    }
  }
}
</style>