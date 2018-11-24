// 依赖包
import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter) //调用vue-router


// 引入自建js
import store from '../store/index.js' //引入封装vuex(store)


// 引入组件
import Home from "../views/home.vue";
import Appeal from "../views/appeal/appeal.vue";
import Declare from "../views/declare/declare.vue";
import Policy from "../views/policy/policy.vue";
  import Article from "../views/policy/article";
import Message from "../views/message/message.vue";
import Member from "../views/member/member.vue";
  import BaseMsg from "../views/member/baseMsg.vue";
  import Push from "../views/member/push.vue";
  import Fav from "../views/member/fav.vue";
  import MyLive from "../views/member/myLive.vue";
  import Setting from "../views/member/setting.vue";


// 创建Router实例
const instance = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: "/home",
      component: Home
    },
    {
      path: "/appeal",
      component: Appeal
    },
    {
      path: "/declare",
      component: Declare
    },
    {
      path: "/policy",
      component: Policy,
      meta: { requireAuth: true }, //添加该字段，表示进入这个路由是需要登录的
    },
    {
      path: "/policy/article",
      component: Article
    },
    {
      path: "/message",
      component: Message
    },
    {
      path: "/member",
      component: Member,
      meta: { requireAuth: true },
      children: [
        {
          path: "/member/baseMsg",
          component: BaseMsg,
          meta: { requireAuth: true }
        },
        {
          path: "/member/push",
          component: Push,
          meta: { requireAuth: true }
        },
        {
          path: "/member/fav",
          component: Fav,
          meta: { requireAuth: true }
        },
        {
          path: "/member/myLive",
          component: MyLive,
          meta: { requireAuth: true }
        },
        {
          path: "/member/setting",
          component: Setting,
          meta: { requireAuth: true }
        },
        {
          path: "/",//重定向，默认显示
          redirect: "/member/baseMsg",
          meta: { requireAuth: true }
        }
      ]
    },
    {
      path: "/",//重定向，默认显示
      redirect: "/home"
    }
  ]
})


// 注册一个全局前置守卫用来拦截导航
instance.beforeEach(
  function(to, from, next){
    const token = store.state.xLogin.token // 前面js引入store(vuex)来获取当前token
    if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
      if (token) { // 通过vuex state获取当前的token是否存在
        next()
      } else {
        alert('该页面需要登陆')
        next({
          path: '/home',
          query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
        })
      }
    } else {
      next()
    }
  }
)


// 默认导出
export default instance