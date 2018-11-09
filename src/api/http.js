import axios from 'axios' 
import Qs from 'qs'

const baseUrl = '/api' //vue.config配置文件

//创建axios实例
var Axios=axios.create({
  timeout:16000
})





function showLoading(){
  console.log('loading');
}
function hideLoading(){
  console.log('end');
}




//添加请求拦截器
Axios.interceptors.request.use(function(config){
  //console.log('先执行请求拦截器');
  showLoading();
  return config
},function(error){
    return Promise.reject(error)
})
//添加响应拦截器
Axios.interceptors.response.use(function(response){ 
  //console.log('执行到响应拦截器')
  hideLoading();
  return response
},function(error){
    console.log('err'+error) 
    return Promise.reject(error)
})





export default{
  //post请求
  post(url,param){
    return new Promise((resolve,reject)=>{
      Axios({
        method:'post',
        url:baseUrl + url,
        data:Qs.stringify(param), 
      }).then(res=>{
        resolve(res);      
        console.log(res);
      }).catch(err=>{
        reject(err);
        console.log(err,'异常');
        console.log('错误信息',err.message);
      })
    })
  }
}

