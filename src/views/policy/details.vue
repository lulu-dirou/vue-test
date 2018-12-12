<template>
  <div class="details-box clear">
    <div class="details">
      <div class="navBar"><span>首页</span> > <span>申报通知</span></div>
      <div class="content-box">
        <div class="title">{{ reset_Zczt }}</div>
        <div class="msg-box">
          <div class="label">标签：
            <span 
              v-for="(bdlist,index) in bdlists"
              v-bind:key="bdlist.id" >{{ bdlists[index] }}</span>
          </div>
          <div class="state flex-middle">
            <div class="title-max">
              <span class="pt">政策来源：<em>{{ results.zcly }}</em></span>
              <span class="time">发布时间：{{ results.fbsj }}</span>
            </div>
            <div class="sc"><button class="btn">☆ 收藏</button></div>
          </div>
        </div>
        <div class="content">
          <p v-html="results.zcbj"></p>
        </div>
      </div>
      <div class="end-box">
        <div class="end">
          <div class="hd clear"><span>相关政策</span></div>
          <div class="bd"><list-qyhd v-bind:popListSize='3'></list-qyhd></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListQyhd from '../../components/ListQyhd.vue'

export default {
  components: {
    'list-qyhd': ListQyhd,
  },
  props: {
  },
  data: function() {
    return {
      results: [],
      bdlists: [],
      reset_Zczt: ''
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
  },
  created: function(){
    var newId = this.$route.query.id;
    this.$http.post(this.$url.zcfw.getZcfw,{
      zcid: newId
    }).then((res) => {
      this.results = res.data.body.data
      this.bdlists = res.data.body.bqList
      this.reset_Zczt = this.$common.html_decode(this.results.zczt)
    })
  },
  mounted: function(){
  }
}
</script>

<style lang="scss" scoped>

</style>
