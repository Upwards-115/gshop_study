// 常规加载方式
import Msite from '../pages/Msite/Msite'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'
// import Login from '../pages/Login/Login'
// import Login from '../pages/Login/Login'
// import Shop from '../pages/Shop/Shop'

// 路由组件懒加载： ES10 import函数

// const Msite = () => import('../pages/Msite/Msite')
// const Search = () => import('../pages/Search/Search')
// const Order = () => import('../pages/Order/Order')
// const Profile = () => import('../pages/Profile/Profile')
// const Login = () => import('../pages/Login/Login')
// const Shop = () => import('../pages/Shop/Shop')

// import Good from '../pages/Shop/Good/Good'
// import Rating from '../pages/Shop/Rating/Rating'
// import Info from '../pages/Shop/Info/Info'

export default [
  {
    path: '/msite',
    component: Msite,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/order',
    component: Order,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/login',
    component: Login,
    // meta: {
    //   isShowFooter: true
    // }
  },
  {
    path: '/',
    redirect: '/msite'
  }
]
