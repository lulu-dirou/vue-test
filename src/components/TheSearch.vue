<template>
  <div class="theSerch">
    <input type="text" v-model="keyword" />
    <select>
      <option value="1">Volvo</option>
      <option value="2">Saab</option>
    </select>
    <button type="button" @click="clickSearch(keyword)">查询</button>
  </div>
</template>


<script >
export default {
  data() {
    return {
      keyword: this.$store.state.xSearch.listkeyWord
    }
  },
  computed: {
  },
  methods: {
    clickSearch(val){
      this.keyword = val;
      this.$store.commit('changeListkeyWord', this.keyword)
      console.log(this.keyword);
    }
  }
}
</script>


<style scoped>
.theSerch {
  margin: 30px 0;
  font-size: 12px;
  text-align: center;
}
</style>