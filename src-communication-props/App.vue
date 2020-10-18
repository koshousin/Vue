<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo="addTodo" />
      <TodoList :todoList="todoList" :deleteTodo="deleteTodo" />
      <TodoFooter :todoList="todoList" :deleteTodos="deleteTodos" :selectAll="selectAll" />
    </div>
  </div>
</template>

<script>
  import TodoHeader from './components/Todo-header'
  import TodoList from "./components/Todo-list";
  import TodoFooter from './components/Todo-footer'

  export default {
    data () {
      return {
        // 从 localStorage 读取 todos
        todoList :JSON.parse(window.localStorage.getItem('todoList') || '[]' )
      }
    } ,
    components : {TodoHeader, TodoList, TodoFooter} ,
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
        handler : function(newValue) {
          // 存储到 localStorage
          // localStorage 里的数据键值对总是以字符串形式存储
          window.localStorage.setItem('todoList' , JSON.stringify(newValue  ))
          console.log(' handler () ')
        }
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
