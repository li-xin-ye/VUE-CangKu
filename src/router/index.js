import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
import Login from '@/views/Login'
import Home from '@/views/Home'
// 产品管理
import GoodsManage from '@/views/GoodsManage'
import List from '@/views/GoodsManage/List'
import Category from '@/views/GoodsManage/Category'
// 订单管理
import OrderManage from '@/views/OrderManage'
import OrderList from '@/views/OrderManage/List'
import Collect from '@/views/OrderManage/Collect'
import Auditing from '@/views/OrderManage/Auditing'
// 广告管理
import Advert from '@/views/Advert'
import AdvertList from '@/views/Advert/List'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Layout,
    children:[
      {
        path:'/',
        name:'home',
        component:Home
      },
      {
        path:'/goods',
        name:'goods',
        component:GoodsManage,
        children:[
          {
            path:'list',
            name:'list',
            component:List
          },
          {
            path:'category',
            name:'category',
            component:Category
          }
        ]
      },
      {
        path:'/order',
        name:'order',
        component:OrderManage,
        children:[
          {
            path:'list',
            name:'list',
            component:OrderList
          },
          {
            path:'collect',
            name:'collect',
            component:Collect
          },
          {
            path:'auditing',
            name:'auditing',
            component:Auditing
          }
        ]
      },
      {
        path:'/advert',
        name:'advertr',
        component:Advert,
        children:[
          {
            path:'list',
            name:'list',
            component:AdvertList
          },
        ]
      },
      
    ]
  },
  {
    path:'/login',
    name:'login',
    component:Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
