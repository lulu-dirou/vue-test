// vue.config.js 配置说明
// 官方vue.config.js 参考文档 https://cli.vuejs.org/zh/config/#css-loaderoptions

module.exports = {
  //引入sass全局变量
  css: {
    loaderOptions: {
      sass: {
        data: `@import "./src/sass/mixin.scss";`
      }
    }
  },
  //dev-server
  devServer: {
    port: 1111, // 端口号
    // 配置跨域处理
    proxy: {
      '/api': {
        // target: 'http://183.237.175.100:3333/',
        //target: 'http://192.168.5.204:8080/',
        target: 'http://zqpt.chancheng.gov.cn/',
        // secure: false,  // 如果是https接口，需要配置这个参数
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}