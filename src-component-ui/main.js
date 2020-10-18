import Vue from 'vue'
import {Button} from 'mint-ui'

import App from '../src/App'

// 注册 标签
Vue.component(Button.name , Button)

new Vue({
  el : '#app' ,
  components : {
    App
  } ,
  template : '<App/>'
})
