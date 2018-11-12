<template>
  <div class="theSerch">
    <input type="text" v-model='keyword' />
    <select>
      <option value="1">Volvo</option>
      <option value="2">Saab</option>
    </select>
    <button type="button" @click='search(keyword)'>查询</button>
  </div>
</template>


<script >
export default {
  data(){
    return {
      keyword: []
    }
  },
  props: {

  },
  computed: {
  },
  methods: {
    search(val){
      this.$emit('searchEvent',val)
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