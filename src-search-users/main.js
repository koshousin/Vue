import Vue from 'vue'
import VueResource from 'vue-resource'

import App from '../src/App'
import '../static/users_page/index.css'

// 声明使用 插件
Vue.use(VueResource)  // 内部会给 VM 对象和组件对象添加一个属性 ： $http

new Vue({
  el : '#app' ,
  components : {
    App
  } ,
  template : '<App/>'
})
