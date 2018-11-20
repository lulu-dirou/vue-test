// module.exports = {
//   pages: {
//     index: {
//       entry: 'src/pages/index/main.js',
//       template: 'public/index.html',
//       filename: 'index.html',
//       title: 'HomePage',
//     },
//     page1: {
//       entry: 'src/pages/page1/main.js',
//       template: 'public/page1.html',
//       filename: 'page1.html',
//       title: 'page1'
//     }
//   }
// }

module.exports = {
  //引入sass全局变量
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "./src/sass/mixin.scss";
        `
      }
    }
  },
  //跨域反向代理,需axios支持,Vue CLI3 API
  devServer: {
    proxy: {
      '/api': {
        target: 'http://183.237.175.100:3333/GEService/',
        //target: 'http://192.168.5.204:8080/GEService/',
        // secure: false,  // 如果是https接口，需要配置这个参数
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}