<template>
  <div class="fullSlide clear">
    <div class="box"></div>
    <div class="mask"></div>
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
.fullSlide {
  position: relative;
  height: 460px;
  .mask {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: url(../common/images/home-full-bg.jpg) center 0 no-repeat;
  }
  .box {
    z-index: 2;
    position: relative;
    width: 1200px;
    margin: 40px auto;
  }
}
</style>