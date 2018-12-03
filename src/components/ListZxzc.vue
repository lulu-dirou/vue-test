<template>
  <div class="listZxzc">
    <ul class="list-1">
      <li v-for="(list,index) in filterLists" :key="list.id">
        <router-link class="flex" v-bind:to="{path:'/policy/article',query:{id:list.id}}">
          <div class="msg-box">
            <div class="title-max"><span>{{ list.zcly }}</span></div>
            <div class="title-box flex-middle">
              <div class="title">{{ $common.html_decode(list.zczt) }}</div>
              <div class="time">{{ timeReset(index) }}</div>
            </div>
            <div class="label">{{ list.zcbqname }}</div>
          </div>
        </router-link>
      </li>
      <li v-if="noData">没有找到你要的结果！</li>
    </ul>
  </div>
</template>


<script >

export default {
  components: {
  },
  data: function(){
    return {
      lists: [],
      noData: false
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
    getApi: function() {
      this.$http.post(this.$url.zcfw.listZcfw,{
        pageSize: 10,
        pageNo: 1
      }).then((res) => {
        this.lists = res.data.body.list
      })
    },
    timeReset: function(val){
      return this.lists[val].fbsj.slice(0,10)
    }
  },
  created: function(){
    this.getApi();
  }
}
</script>


<style lang="scss" scoped>
.listZxzc {
}
</style>