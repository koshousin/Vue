/*
*   存储数据的工具模块
*
*   问题：
*     1 .是暴露 函数还是 对象
*     1 . 需要向外暴露一个功能还是多个功能
* */

const TODOS_KEY = 'todos_key'

export default {
  getData() {
    return JSON.parse( window.localStorage.getItem(TODOS_KEY) || '[]')
  } ,
  setData ( value ) {
    window.localStorage.setItem(  TODOS_KEY , JSON.stringify(value) )
  }

}
