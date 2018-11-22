// 依赖包
import Axios from 'axios' 
import Qs from 'qs'
//Vue.use() //axis不是插件,无需用vue来use,所以这句不用写,vue依赖包也不用导入


//创建axios实例
const instance = Axios.create({
  'X-Requested-With': 'XMLHttpRequest',
  timeout: 16000,
  baseURL: '/api' //引用vue.config配置文件
})


// loading
function showLoading(){
  console.log('/loading/');
}
function hideLoading(){
  console.log('/end/');
}


// 添加"请求"拦截器
instance.interceptors.request.use(
  // 在发送请求之前做些什么
  function(config){
    showLoading();
    return config
  },
  // 对请求错误做些什么
  function(error){
    return Promise.reject(error)
  }
)


// 添加"响应"拦截器
instance.interceptors.response.use(
  // 对响应数据做点什么
  function(response){ 
    hideLoading();
    console.log(response);
    return response
  },
  // 对响应错误做点什么
  function(error){
    if(error && error.response){
      switch(error.response.status){
        case 400:
            error.message = '错误请求：400'
            break;
        case 401:
            error.message = '未授权，请重新登录：401'
            break;
        case 403:
            error.message = '拒绝访问：403'
            break;
        case 404:
            error.message = '请求错误,未找到该资源：404'
            break;
        case 405:
            error.message = '请求方法未允许:405'
            break;
        case 408:
            error.message = '请求超时:408'
            break;
        case 500:
            error.message = '服务器端出错:500'
            break;
        case 501:
            error.message = '网络未实现：501'
            break;
        case 502:
            error.message = '网络错误:502'
            break;
        case 503:
            error.message = '服务不可用:503'
            break;
        case 504:
            error.message = '网络超时:504'
            break;
        case 505:
            error.message = 'http版本不支持该请求:505'
            break;
        default:
        error.message = `连接错误${error.response.status}`
      }
    }else{
      error.message = "连接到 服务器 失败"
    }
    return Promise.reject(error.message)
  }
)


export default {
  // 封装get请求
  get: function(url,data){
    return new Promise((resolve,reject)=>{
      instance({
        method:'get',
        url: url,
        data: Qs.stringify(data)
      }).then(res=>{
        resolve(res);     
      }).catch(err=>{
        reject(err);
      })
    })
  },
  // 封装post请求
  post: function(url,data){
    return new Promise((resolve,reject)=>{
      instance({
        method:'post',
        url: url,
        data: Qs.stringify(data), 
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
      }).then(res=>{
        resolve(res);
      }).catch(err=>{
        reject(err);
      })
    })
  }
}

