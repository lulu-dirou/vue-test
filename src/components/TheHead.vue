<template>
    <div id="TheHead" class="flex">
        <div class="logo"></div>
        <div class="msg">
            <div>{{ title }}</div>
            <div>作者{{ author }}</div>
        </div>
        <div class="box">
            
            <p @click="changeTheme('theme1')">11</p>
            <p @click="changeTheme('theme2')">22</p>
            <p @click="changeTheme('theme3')">33</p>
        </div>
    </div>
</template>


<script >
export default {
    name: 'TheHead',
    data(){
        return {
            title: 'xing-se.com.cn',
            author: 'lulehe',
        }
    },
    methods: {
        changeTheme (theme) {
          window.document.documentElement.setAttribute('data-theme', theme)
        }
      },
}
</script>


<style lang="scss" scoped>
    #TheHead {
        width: 100%;
        height: 80px;
        padding: 10px;
        align-items: center;
        color: #fff;
        @include bg_color($bg-color-theme);
    }
    #TheHead .logo {
        width: 60px;
        height: 60px;
        border-radius: 100%;
        background-color: #999;
    }
    #TheHead .box{
        flex: 0 0 200px;
        height: 100%;
        background-color: rgba(0,0,0,0.2);
    }
</style>