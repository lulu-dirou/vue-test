<template>
  <div class="child policy clear">
    <nav>
      <ul class="flex-middle">
        <li><router-link to="/policy/zchb">政策汇编</router-link></li>
        <li><router-link to="/policy/sbzc">申报政策</router-link></li>
        <li><router-link to="/policy/zcjd">政策解读</router-link></li>
        <li><router-link to="/policy/zcdy">政策订阅</router-link></li>
      </ul>
    </nav>
    <section>
      <router-view></router-view>
    </section>
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
