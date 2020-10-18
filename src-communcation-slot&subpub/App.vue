<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!--<TodoHeader @addTodo="addTodo" />  --> <!--给TodoHeader绑定事件监听-->
      <TodoHeader ref="header" />
      <TodoList :todoList="todoList"  />
      <TodoFooter :todoList="todoList" :deleteTodos="deleteTodos" :selectAll="selectAll" />
      <todo-footer>
        <input type="checkbox" v-model="isSelectAll" slot="checkAll">
        <span slot="count">已完成{{completed}} / 全部{{todoList.length}}</span>
        <button class="btn btn-danger" v-show="completed" @click="deleteTodos" slot="deleteBtn">清除已完成任务</button>
      </todo-footer>
    </div>
  </div>
</template>

<!--
  绑定事件监听 ---- > 订阅
  触发事件  ----- >  发布

-->

<script>
  import Pubsub from 'pubsub-js'

  import TodoHeader from './components/Todo-header'
  import TodoList from "./components/Todo-list";
  import TodoFooter from './components/Todo-footer'
  import storage from '././utils/localStorageUtil'

  export default {
    data () {
      return {
        // 从 localStorage 读取 todos
        todoList :storage.getData()
      }
    } ,
    computed : {
      completed () {
        return this.todoList.reduce( (preTotal , todo) => preTotal + (todo.complete ? 1 : 0) , 0 )
      } ,

      isSelectAll : {
        // 读取属性
        get () {
          return (this.completed === this.todoList.length) && this.completed > 0;
        } ,
        set (value) {  //  value 为当前 checkbox 的值
          console.log(value)
          this.selectAll(value)
        }
      }
    } ,

    components : {TodoHeader, TodoList, TodoFooter} ,
    // 执行异步代码，绑定监听
    mounted () {
      this.$refs.header.$on('addTodo' , this.addTodo) //  使用 ref 绑定监听

      // 订阅消息
      let token = Pubsub.subscribe('deleteTodo' ,(msg , index) => {
        this.deleteTodo(index)
      })
    } ,
    methods : {
      addTodo (todo) {
        this.todoList.unshift(todo)
      } ,
      deleteTodo (index) {
        this.todoList.splice(index , 1)
      } ,
      // 删除选中的
       deleteTodos () {
        this.todoList = this.todoList.filter(todo => !todo.complete )
       } ,
      // 全选/全不选
      selectAll (flag) {
        this.todoList = this.todoList.map(todo => ({title : todo.title , complete : flag}) )
      }
    } ,

    watch : { // 深度监视
      // 监视
      todoList : {
        deep : true ,
        // handler : function(newValue) {
        //   // 存储到 localStorage
        //   // localStorage 里的数据键值对总是以字符串形式存储
        //   window.localStorage.setItem('todoList' , JSON.stringify(newValue  ))
        // }

        // 用函数对象代替以上
        handler : storage.setData
      }
    }
  }
</script>

<style scoped>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

</style>
