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


// //添加请求拦截器
// Axios.interceptors.request.use(function(config){
//     console.log('先执行请求拦截器');
//     config.headers.token = '568d80040df4'    //可改为取缓存token
//     return config
// },function(error){
//     return Promise.reject(error)
// })


// //添加响应拦截器
// service.interceptors.response.use(function(response){ 
//     console.log('执行到响应拦截器')
//     return response
// },function(error){
//     console.log('err'+error) 
//     return Promise.reject(error)
// })


// function handleResults(e){
//     console.log(e);
//     console.log('成功');
// }

// function Promise(){
//     //console.log('成功');
//     cback : function{
//         console.log('成功');
//     }
// }



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




    // post(url,param){


    //     return new Promise(Cback,Reject){
    //         return service({
    //                 method:'get',
    //                 url:baseUrl + url,
    //                 params:param,  
    //             }).then(res=>{  //axios返回的是一个promise对象
    //                 cback(res);   
    //                 console.log(res)  
    //             }).catch(err=>{
    //                 console.log(err,'异常')
    //             })
    //     }


        // axios({
        //     method:'post',
        //     url:baseUrl+url,
        //     data:qs.stringify(param) 
        // })
        // .then(function(res){
        //    return handleResults(res)
        // })
        // .catch(function(err){
        //     console.log(err,'接口异常')
        // })
    // }





    // get(url,param){ 
    //     return new Promise((cback,reject)=>{
    //         service({
    //             method:'get',
    //             url:baseUrl + url,
    //             params:param,  
    //         }).then(res=>{  //axios返回的是一个promise对象
    //             cback(res);   
    //             console.log(res)  
    //         }).catch(err=>{
    //             console.log(err,'异常')
    //         })
    //     })
    // },
    // //post请求
    // post(url,param){
    //     return new Promise((cback,reject)=>{
    //         service({
    //             method:'post',
    //             url:baseUrl + url,
    //             data:qs.stringify(param), 
    //         }).then(res=>{
    //             cback(res)        
    //             console.log(res)
    //         }).catch(err=>{
    //             console.log(err,'异常')
    //             console.log(err.msg)
    //         })
    //     })
    // }
}

