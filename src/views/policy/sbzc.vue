<template>
  <div class="sbzc">
    <list-sbzt :thePageShow="true"></list-sbzt>
  </div>
</template>


<script>
import ListSbzt from '../../components/ListSbzt.vue'

export default {
  components: {
    'list-sbzt': ListSbzt
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
.sbzc {
  padding: 30px;
  margin-bottom: 40px;
  background-color: #fff;
}
</style>