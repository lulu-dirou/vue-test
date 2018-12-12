<template>
  <div class="baseDialog" v-if="this.$store.state.xErrmsg.show">
    <span>错误！</span>
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
.errmsg {
  position: fixed;
  top: 0;
  width: 100%;
  height: 20px;
  line-height: 20px;
  text-align: center;
  @include theme_bg(danger,0.8);
  span {
    font-weight: 600;
    color: #fff;
  }
}
</style>