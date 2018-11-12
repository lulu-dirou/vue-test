<template>
  <div>
    <h2>aaaaaaaaaaa</h2>
    <h2 >{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  computed:{
    msg(){
      return this.$store.state.xSearch.childText;
    }
  },
  methods: {
  }
}
</script>