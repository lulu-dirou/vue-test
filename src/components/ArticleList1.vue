<template>
  <div class="ArticleList1">
    <div class="hd"><span>{{ HdTitle }}</span></div>
    <div class="bd">
      <ul>
        <li class="lu-flex" v-for="list in lists" v-bind:key="list.id">
          <div class="dot-box">{{ list.id }}</div>
          <div class="msg-box">
            <div class="msg-title">{{ list.MsgTitle }}</div>
            <div class="msg-min lu-flex">
              <span class="msg-label">{{ list.MsgLabel }}</span>
              <span class="msg-time">{{ list.MsgTime }}</span>
            </div>
          </div>
          <div class="sub-box">submit</div>
        </li>
      </ul>
    </div>
  </div>
</template>


<script >
export default {
  name : 'ArticleList1',
  data : function(){
    return {
      lists : [
        {
          id: '1',
          MsgTitle : '回来',
          MsgLabel : 'aa',
          MsgTime : '2018.11.11'
        },
        {
          id: '2',
          MsgTitle : '走开',
          MsgLabel : 'bb',
          MsgTime : '2018.11.12'
        }
      ]
    }
  },
  props: [
    'HdTitle',
    'HdTitleUrl'
  ]
}
</script>


<style scoped>
.ArticleList1 .hd {
  margin-bottom: 10px;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  font-weight: 600;
  color: #856751;
  border-bottom: 1px solid #ccc;
}
.ArticleList1 li {
  align-items: center;
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid #eee;
}
.ArticleList1 li .dot-box {
  margin-right: 10px;
}
.ArticleList1 li .msg-box {
  flex: 1;
}
.ArticleList1 li .msg-box .msg-title {
  margin: 5px 0;
  font-size: 16px;
  color: #666;
}
.ArticleList1 li .msg-box .msg-min {
  align-items: center;
  font-size: 12px;
  color: #999;
}
.ArticleList1 li .msg-box .msg-min .msg-label {
  border: 1px solid #ff6600;
  padding: 2px 4px;
  margin-right: 5px;
  border-radius: 3px;
  color: #ff6600;
}
.ArticleList1 li .sub-box {
  margin-left: 10px;
}
</style>