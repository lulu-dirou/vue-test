<template>
  <div class="theSerch">
    <input type="text" v-modal="keyword"/>
    <select>
      <option value="1">Volvo</option>
      <option value="2">Saab</option>
    </select>
    <button type="button">查询</button>
  </div>
</template>


<script >
export default {
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
    clickSearch(val){
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