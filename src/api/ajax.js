
import axios from 'axios'
import router from '../router'
import qs from 'qs'
//node内置模块 转数据格式

// 1.生成Axios的伪实例 instance不是真正的new Axios，但是拥有axios实例的所有属性和方法、
const instance = axios.create({
 baseURL:'/api'
})
//2.添加请求拦截器，理解：即将要要送请求的时候，将请求拦截来下，对当前的请求批量处理，如：添加token，修改请求函数


//2.添加请求拦截器 理解：即将要发送请求的时候，将请求拦截下来，对当前请求批量处理，如：添加token
instance.interceptors.request.use(config => {
//2.1 config包含当前请求的所用请求信息： method url data
  //2.2 修改post请求的请求参数格式： 默认的参数格式是json对象格式{a:xxx, b:yyy},
  // 当前服务器能处理的是 url-encoding 如：a=xxx&&b=yyy
  config.data = qs.stringify(config.data)//将json对象格式装换为url-encoding形式
  return config
})


//3.设置响应拦截器
instance.interceptors.response.use(
  response => { return response.data}
  // 可省略return {}
  error => {
    alert('请求失败')
    console.log(error);
    //默认返回一个成功的promise实例 但是没有数据
    //手动返回一个状态为初始化的promise
    return new promise(() => {})
  }
)


export default instance


