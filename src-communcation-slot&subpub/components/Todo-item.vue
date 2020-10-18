<template>
  <li :style='{background:bgColor , color : fontColor}' @mouseenter="handleShow(true)" @mouseleave="handleShow(false)">
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
  </li>
</template>

<script>
import Pubsub from 'pubsub-js'
export default {
  name: "Todo-item" ,
  props : {
    todo : Object ,
    index : Number
  } ,
  data () {
    return {
      bgColor : '#fff' ,
      fontColor : '#000' ,
      isShow : false
    }
  } ,
  methods : {
    handleShow (flag) {
      if(flag){
        this.bgColor = 'gray'
        this.fontColor = '#fff'
        this.isShow = true
      } else {
        this.bgColor = '#fff'
        this.fontColor = '#000'
        this.isShow = false
      }
    } ,
    deleteItem () {
      let { index , todo }= this;
      if(confirm(`Are you sure that delete ${todo.title} ? `)){
        // this.deleteTodo(index)
          // 发布消息
          Pubsub.publish('deleteTodo' , index)
      }
    }
  }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
