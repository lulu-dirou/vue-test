import axios from 'axios'
import qs from 'qs'



export default {
    // fetchGet(url, params = {}) {
    //     return new Promise((resolve, reject) => {
    //         axios.get(url, params).then(res => {
    //             if(res.data.code === 302) {
    //                 window.alert('获取数据失败')
    //                 // MessageBox('提示', '登录失效,请重新登录');
    //                 // MessageBox.alert('登录失效,请重新登录', '提示').then(action => {   
    //                 //     router.push("/login");
    //                 // });
    //             }
    //             resolve(res.data);
    //         }).catch(error => {
    //             reject(error);
    //         })
    //     })
    // },
    fetchPost(url, params = {}) {
        // return new Promise((resolve, reject) => {
        //     axios.post(url, qs.stringify(params)).then(res => {
        //         resolve(res.data);
        //     }).catch(error => {
        //         reject(error);
        //     })
        // })
        axios.post(url, qs.stringify(params))
          .then(function (res) {
            console.log(res.data);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
}