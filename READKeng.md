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
	//子接收父数据用props,父接收子方法用$emit
