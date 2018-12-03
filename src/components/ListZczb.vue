<template>
  <div class="listZczb">
    <ul class="list-4">
      <li v-for="list in filterLists" :key="list.id">
        <router-link class="flex" v-bind:to="{path:'/policy/article',query:{id:list.id}}">
          <div class="dot-box"><img src="../common/images/zczb-img-demo.png"></div>
          <div class="msg-box">
            <div class="title">国务院办公厅关于转发 财政部、国务院扶贫办、国家发展改革委扶贫项目资金绩效管理办法的通知</div>
            <div class="label">经济促进局</div>
            <div class="time">2018.09.26<b>{09:00-10:00}</b></div>
          </div>
          <div class="sub-box"><button class="btn active">进行中</button></div>
        </router-link>
      </li>
      <li v-if="noSearchData">没有找到你要的结果！</li>
    </ul>
  </div>
</template>


<script >

export default {
  components: {
  },
  data: function(){
    return {
      lists: [1,2,3,4,5,6,7,8,9,10],
      noSearchData: false
    }
  },
  props: {
    popListSize: Number
  },
  computed: {
    filterLists: function(){
      return this.lists.slice(0, this.popListSize)
    }
  },
  methods: {
  },
  created: function(){
  }
}
</script>


<style lang="scss" scoped>
.listZczb {
}
</style>