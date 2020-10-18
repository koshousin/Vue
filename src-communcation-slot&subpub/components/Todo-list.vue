<template>
  <ul class="todo-main">
    <TodoItem v-for="(todo , index) in todoList" :todo="todo" :index="index" :key="index"  />
  </ul>
</template>

<script>
    import TodoItem from './Todo-item'
    export default {
      name: "Todo-list" ,
      props : {
        todoList : Array
      } ,
      components : {TodoItem}
    }
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}

</style>
