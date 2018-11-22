#   cnpm install babel-polyfill --save
    //转码支持ES6,为当前环境提供垫片


#   cnpm install axios --save
    //安装axios做api


#   cnpm install qs
    //安装qs解决axios post传参问题


#   cnpm install vue-router --save
    //安装路由


#   vue.config.js->module.exports={devServer:{proxy:{}}}
    //跨域反向代理,需axios支持,Vue CLI3 API


#   package.json->eslintConfig{rules{"no-console":"off"}}
    //关闭npm eslint对console的烦人检验错误


#   props $emit
	//父组件通过porps传递到子组件，子组件通过$emit发送事件到父组件


#   cnpm install vuex --save
	//安装vuex 解决父子组件之间互相修改数据
	//1、vuex就是在vue中创建全局变量的东西
	//2、vuex提供了一些优雅的方法，可以让我们改变全局变量的值


#   cnpm install less --save
    //安装less


#   cnpm install sass-loader node-sass -D
    //安装sass,全局需要在vue.config.js引用


#   cnpm install --save js-md5
    //安装MD5加密


#   import
    //用法  import引入依赖包，不需要相对路径，自己写的js文件则需要相对路径


             
