<template>
  <div class="details_sb details-box clear">
    <div class="details">
      <div class="navBar"><span>首页</span> > <span>申报政策</span></div>
      <div class="content-box">
        <div class="title">{{ results.name }}</div>
        <div class="msg-box">
          <div class="state flex-middle">
            <div class="title-max">
              <span class="pt">
                <em style="font-size: 16px">{{ moneyState() }}</em>，剩余
                <em>{{ dayState() }}</em>天
              </span></div>
            <div class="sc">
              <button class="btn" :class="btnState">{{ btnStateMsg }}</button>
              <button class="btn btn-info">☆ 收藏</button>
            </div>
          </div>
          <table class="tc tc-f tc-b tc-pdt5 tc-pdl10">
            <tbody>
              <tr>
                <td style="width: 160px;">申报时间：</td>
                <td>{{ results.startDate }} 至 {{ results.endDate }}</td>
              </tr>
              <tr>
                <td>扶持形式：</td>
                <td>{{ results.support_type }}</td>
              </tr>
              <tr>
                <td>支持方式：</td>
                <td>{{ results.request_type }}</td>
              </tr>
              <tr>
                <td>主管部门：</td>
                <td>{{ results.govname }}</td>
              </tr>
              <tr>
                <td>联系人员：</td>
                <td>{{ results.contact }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="content">
          <ul class="tabs clear">
            <li 
              v-for="(list,index) in tabs" 
              v-bind:key="list.id"
              v-bind:class="num===index?'active':''"
              v-on:click="changeActive(index)">{{ list }}</li>
          </ul>
          <div class="tab-content">
            <div class="tab1" v-if="num===0?'true':''">
              <h3 class="text-neutral">项目描述：</h3>
              <p v-html="results.description"></p></br>
              <h3 class="text-neutral">申报单位要求：</h3>
              <p v-html="results.unit_needs"></p></br>
              <h3 class="text-neutral">项目申报要求：</h3>
              <p v-html="results.request_needs"></p>
            </div>
            <div class="tab2" v-if="num===1?'true':''">
              相关政策文件
            </div>
          </div>
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
      results: [],
      btnState: '',
      btnStateMsg: '',
      tabs: ['项目介绍','政策文件'],
      num: 0
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    getApi: function(){
      var newId = this.$route.query.id;
      this.$http.post(this.$url.sbfw.sbztmx,{
        id: newId
      }).then((res) => {
        this.results = res.data.body.list[0]
      })
    },
    dayState: function(){
      let endTime = this.$common.date_de(this.results.endDate)
      let curTime = this.results.dqsj
      if(endTime>curTime){
        this.btnState = 'btn-primary'
        this.btnStateMsg = '申报中'
        return parseInt((Math.abs(endTime - curTime)) / 3600 / 24 / 1000)
      }else{
        this.btnState = 'btn-disabled'
        this.btnStateMsg = '已结束'
        return 0
      }
    },
    moneyState: function(){
      if(this.results.moneyMin == this.results.moneyMax){
        return '资金支持'
      }else{
        return this.results.moneyMin+'万-'+this.results.moneyMax+'万'
      }
    },
    changeActive(val){
      this.num = val;
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

</style>
