<template>
  <div class="details_dm details-box clear">
    <div class="details">
      <div class="navBar"><span>首页</span> > <span>政策解读</span> > <span>动漫图解</span></div>
      <div class="content-box">
        <div class="title">{{ $common.html_decode(results.jdmc) }}</div>
        <div class="msg-box">
          <div class="state flex-middle">
            <div class="title-max">
              <span class="time">发布时间：{{ $common.time_slice(results.fbsj) }}</span>
              <span class="time">类型：{{ resultsFjList[0].ywlx }}</span>
            </div>
            <div class="sc"><button class="btn">☆ 收藏</button></div>
          </div>
        </div>
        <div class="content">
          <p>
            <img :src="$common.api_baseUrl+resultsFjList[0].xdlj">
          </p>
        </div>
      </div>
    </div>
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
      results: {
        jdmc: '',
        fbsj: ''
      },
      resultsFjList: [
        {
          xdlj: '',
          ywlx: ''
        }
      ]
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    getApi: function(){
      var newId = this.$route.query.id;
      this.$http.post(this.$url.zcfw.getZbDetail,{
        jdid: newId
      }).then((res) => {
        this.results = res.data.body.data
        this.resultsFjList = res.data.body.fjList
      })
    }
  },
  created: function(){
    this.getApi()
  },
  mounted: function(){
  }
}
</script>

<style lang="scss" scoped>
.details_dm {
  .content {
    p {
      text-align: center;
    }
  }
}
</style>
