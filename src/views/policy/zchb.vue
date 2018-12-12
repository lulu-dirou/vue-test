<template>
  <div class="zchb clear">
    <div class="area-box clear">
      <div class="area">
        <div class="hd"><span>促进企业振兴发展政策汇编</span></div>
        <div class="bd">
          <ul class="flex">
            <li 
              @click="changeList('06047f3fd8c14a568037960d555541d3','助融资')" 
              :class="zcfwid==='06047f3fd8c14a568037960d555541d3'?'active':''">
              <div class="li-box">
                <div class="ico text-primary"><i class="iconfont icon-whatsup"></i></div>
                <div class="title">助融资</div>
              </div>
            </li>
            <li 
              @click="changeList('ad8ea522d0f94e48b9c29d61605cdb20','促创新')"
              :class="zcfwid==='ad8ea522d0f94e48b9c29d61605cdb20'?'active':''">
              <div class="li-box">
                <div class="ico text-info"><i class="iconfont icon-message"></i></div>
                <div class="title">促创新</div>
              </div>
            </li>
            <li 
              @click="changeList('827a75f5b16141d297333e23fae3ba11','助产业')"
              :class="zcfwid==='827a75f5b16141d297333e23fae3ba11'?'active':''">
              <div class="li-box">
                <div class="ico text-warning"><i class="iconfont icon-chart"></i></div>
                <div class="title">助产业</div>
              </div>
            </li>
            <li 
              @click="changeList('78a327108e9c4101bf7eb2f5cf1ecbc6','扶成长')"
              :class="zcfwid==='78a327108e9c4101bf7eb2f5cf1ecbc6'?'active':''">
              <div class="li-box">
                <div class="ico text-success"><i class="iconfont icon-pin"></i></div>
                <div class="title">扶成长</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="area">
        <div class="hd"><span>企业政策汇编</span></div>
        <div class="bd">
          <ul class="flex">
            <li @click="changeList('574c98ff02a8471fa9137f794a602ec1','人才篇')"
              :class="zcfwid==='574c98ff02a8471fa9137f794a602ec1'?'active':''">
              <div class="li-box">
                <div class="ico text-danger"><i class="iconfont icon-user"></i></div>
                <div class="title">人才篇</div>
              </div>
            </li>
            <li 
              @click="changeList('f013ba10ba9a4f7ebe818caadc08c4b4','产业篇')"
              :class="zcfwid==='f013ba10ba9a4f7ebe818caadc08c4b4'?'active':''">
              <div class="li-box">
                <div class="ico text-success"><i class="iconfont icon-hot"></i></div>
                <div class="title">产业篇</div>
              </div>
            </li>
            <li 
              @click="changeList('e7d496c75be24907b3e9b37e53d9ec9c','创业篇')"
              :class="zcfwid==='e7d496c75be24907b3e9b37e53d9ec9c'?'active':''">
              <div class="li-box">
                <div class="ico text-primary-light"><i class="iconfont icon-lamp"></i></div>
                <div class="title">创业篇</div>
              </div>
            </li>
            <li 
              @click="changeList('8d559c255ba9455788d65141d433e287','上市篇')"
              :class="zcfwid==='8d559c255ba9455788d65141d433e287'?'active':''">
              <div class="li-box">
                <div class="ico text-primary-dark"><i class="iconfont icon-globe"></i></div>
                <div class="title">上市篇</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="list-box">
      <div class="hd"><span>{{ areaTitle }}</span></div>
      <div class="bd">
        <list-zxzc-table :thePageShow="true" :popZcflid="zcfwid"></list-zxzc-table>
      </div>
    </div>
  </div>
</template>


<script>
import ListZxzcTable from '../../components/ListZxzcTable.vue'

export default {
  components: {
    'list-zxzc-table': ListZxzcTable
  },
  props: {
  },
  data: function() {
    return {
      zcfwid: '',
      areaTitle: '最新政策'
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    changeList: function(val,parm){
      this.zcfwid = val
      this.areaTitle = parm
    }
  },
  created: function(){
  },
  mounted: function(){
  }
}
</script>


<style lang="scss" scoped>
.zchb {
  .area-box {
    padding: 30px;
    margin-bottom: 30px;
    background-color: #fff;
    @include shadow();
    .area {
      float: left;
      width: 555px;
      margin-right: 30px;
      border: 1px solid #e1e1e1;
      @include theme_bd(neutral-border);
      &:last-child {
        margin-right: 0;
        margin-bottom: 0;
      }
      .hd {
        height: 40px;
        line-height: 60px;
        span {
          display: inline-block;
          padding: 0 20px;
          @include theme_font(neutral-content,0.6);
        }
      }
      .bd {
        ul {
          flex-wrap: wrap;
          justify-content: space-between;
          li {
            position: relative;
            flex: 1;
            padding: 0 20px;
            margin: 20px 0;
            text-align: center;
            cursor: pointer;
            .li-box {
              padding: 10px;
              @include radius(5px);
              .ico i {
                font-size: 72px;
              }
              .title {
                font-size: $font-size-dfx;
                @include theme_font(neutral);
              }
              &:hover .title {
                @include theme_font(primary);
              }
            }
            &:hover {
              .li-box {
                @include theme_bg(neutral-content,0.05);
              }
            }
            &.active {
              .li-box {
                padding: 10px;
                @include theme_bg(neutral-content,0.1);
                @include radius(5px);
              }
            }
            &:after {
              position: absolute;
              right: 0;
              top:50%;
              margin-top: -30px;
              width: 1px;
              height: 60px;
              content: '';
              @include theme_bg(neutral-border);
            }
            &:last-child:after {
              display: none;
            }
          }
        }
      }
    }
  }
  .list-box {
    margin-bottom: 40px;
    .hd {
      height: 40px;
      line-height: 40px;
      span {
        float: left;
        padding: 0 30px;
        font-size: $font-size-dfx;
        color: #fff;
        @include theme_bg(primary);
      }
    }
    .bd {
      padding: 30px;
      background-color: #fff;
    }
  }
}
</style>