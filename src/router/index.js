import Vue from "vue";
import Router from "vue-router";
import Home from "../views/home.vue";
import Appeal from "../views/appeal/appeal.vue";
import Declare from "../views/declare/declare.vue";
import Policy from "../views/policy/policy.vue";
import policyArticleInfo from "../views/policy/policyArticleInfo";
import Message from "../views/message/message.vue";
import Member from "../views/member/member.vue";

Vue.use(Router);

export default new Router({
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
      component: Policy
    },
    {
      path: "/policyArticleInfo",
      component: policyArticleInfo
    },
    {
      path: "/message",
      component: Message
    },
    {
      path: "/member",
      component: Member
    },
    {
      path: "/",//重定向，默认显示
      redirect: "/home"
    }
  ]
});
