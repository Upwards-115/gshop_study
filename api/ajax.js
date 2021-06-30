/*
ajax请求函数模块
返回值： promise对象（异步返回的数据是：response.data）
* */
import axios from "axios"
import qs from 'qs'
import router from '../router'

//1.生成Axios的伪实例，instance不是真实的new Axios,但是拥有axios实例的所有的属性和方法
const instance = axios.create({
  baseURL: '/api'
})

//2.添加请求拦截器：理解咋要发送请求的时候将请求拦截下来，对当前请求批量处理，如：添加token，修改请求参数
instance.interceptors.request.use(config => {
  //1)config包含当前请求的所有信息： method url data
  //2)修改post请求参数的格式
  //3)携带token的方式： 1.cookie 2.请求参数 3.请求头[authorization]
  //判断当前请求是否需要携带token
  if(config.headers.needToken){
    let token = localStorage.getItem('token_key')
    if(token){
        config.headers.authorization = token
    } else {//没有token情况自动登录
      throw Error ('请先登录')
    }
  }
  return config
} )

//设置响应拦截器
instance.interceptors.response.use(
  response => response.data,
  error => {
    console.log(error.message);
    //默认会返回一个成功的promise实例，但是没有数据
    if(!error.response){//请求没有真正发出去，但是请求拦截器报的错
      alert(error.message)
      //跳转到登录页
      //router.currentRoute代表的当前的路由信息
      if(router.currentRouter.path !== '/login'){
        router.replace('/login')
      }
    }
    else{//发送请求后获取错误的信息对象
      if(error.response.status ==== 401){
        alert('token过期，请重新登录')
        //跳转到登录页
        if(router.currentRouter.path !== '/login'){
          router.replace('/login')
        }
      }else if(error.response.status === 404){
        alert('请求资源为找到')
      } else {
        alert('请求错误')
      }

    }
    //手动返回状态初始化的promise
    return new Promise(() => {})
  }
)
// export default function ajax (url,data={},type='GET'){
//   return new Promise(function (resolve,reject) {
//     //执行异步ajax请求
//     let promise
//     if(type === 'GET'){
//       //准备url query参数数据
//       let dataStr = ''//数据拼接字符串
//       Object.key(data).forEach(key => {
//         dataStr += key + '=' + data[key] + '&'
//       })
//       if (dataStr !== ''){
//         dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
//         url = url + '?' + dataStr
//       }
//     //发送get请求
//       promise = axios.get(url)
//     }
//     else {
//       //发送post请求
//       promise = axios.post(url,data)
//     }
//     promise.then(function (response) {
//       //成功调用resolve()
//       resolve(response.data)
//     }).catch(function (error) {
//       //失败了调用reject()
//       reject(error)
//     })
//   })
// }
