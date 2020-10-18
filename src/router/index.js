/*
*   路由器模块
*
*
* */
import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../views/About'
import Home from '../views/Home'
import News from '../views/News'
import Messages from '../views/Messages'
import MessageDetail from '../views/MessageDetail'

Vue.use(VueRouter)

export default new VueRouter({
  // n 个路由
  routes: [
    {
      path : '/about' ,
      component : About
    } ,
    {
      path : "/home" ,
      component : Home ,
      children : [
        {
          path : '/home/news' ,   // path 最左侧的永远代表根路由
          component : News
        } ,
        {
          path : 'messages' ,     // 简化写法
          component : Messages ,
          children : [
            {
              path : '/home/messages/detail/:id' ,
              component : MessageDetail
            }
          ]
        } ,
        {
          path : '' ,
          redirect : '/home/news'
        }
      ]
    } ,
    {
      // 默认请求about 页面
      path : '/' ,
      redirect : '/about'
    }
  ]
})

