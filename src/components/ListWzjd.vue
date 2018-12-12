<template>
  <div class="listWzjd">
    <table class="list-1-table tc tc-f tc-bb tc-pdt10 tc-pdl10 tc-sd-x">
      <tbody>
        <tr v-for="list in filterLists" :key="list.id">
          <td class="dot"><span></span></td>
          <td class="title" :title="$common.html_decode(list.jdmc)">
            <router-link :to="{path:'/policy/details_wz',query:{id:list.id}}">
            <span>{{ $common.html_decode(list.jdmc) }}</span>
            </router-link>
          </td>
          <td class="time">{{ $common.time_slice(list.fbsj) }}</td>
        </tr>
      </tbody>
    </table>
    <div v-if="noData">{{ noDataMsg }}</div>
    <the-page
      :total="listTotal"
      :pageSize="listPageSize"
      :show="thePageShow"
      @pageChange="listPageChange"></the-page>
  </div>
</template>


<script >
import ThePage from './ThePage.vue'

export default {
  components: {
    'the-page': ThePage
  },
  data: function(){
    return {
      listTotal: 35,
      listPageSize: 10,
      listPageNo: 1,
      lists: [],
      noData: false
    }
  },
  props: {
    popListSize: Number,
    thePageShow: Boolean
  },
  computed: {
    filterLists: function(){
      return this.lists.slice(0, this.popListSize)
    }
  },
  methods: {
    getApi: function(){
      this.$http.post(this.$url.zcfw.listZcjd,{
        pageSize: this.listPageSize,
        pageNo: this.listPageNo
      }).then((res) => {
        this.lists = res.data.body.list
      })
    },
    listPageChange: function(val) {
      this.listPageNo = val
      this.getApi();
    },
  },
  created: function(){
    this.getApi();
  }
}
</script>


<style lang="scss">
</style>