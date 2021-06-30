import ajax from './ajax.js'


// 根据经纬度获取位置详情
export const getAddress = () => ajax({
  url: `/position/${latitude},${longitude}`
})


// 获取食品分类列表
export const getCategorys = () => ajax({
  url: `/index_category`,
  header{
    needToken: true
  }
})

//根据经纬度获取商品列表
export const getShopList = (latitude,longitude) => ajax({
  url: `/shops`,
  params:{
    latitude,
    longitude
  },
  headers {
    needToken: true
  }
})

//发送短信验证码
export const sendCode = ({phone}) => ajax ({
  url: '/sendcode',
  params: {
    phone
  }
})


//用户密码登录
export const loginWithUserName = ({username,pwd,captcha}) => ajax ({
  url: 'login_pwd',
  method:'POST',
  data:{
    name:username,
    pwd,
    captcha
  },
  headers: {
    needToken: false
  }
})


//手机号验证码登录
export const loginWithPhone = ({phone,code}) => ajax ({
  url: '/login_sms',
  method:'POST',
  data: {
    phone,
    code
  }
})


//自动登录
export const  autoLogin = () => ajax({
  url: '/auto_login',
  headers: {
    needToken: true
  }
})

//测试mock接口
export const test = () => ajax('/test2')

//商家数据接口
export const getShopDatas = () => ajax({
  url: '/getShopDatas'
})
