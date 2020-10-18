<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isSelectAll"/>
    </label>
    <span>
          <span>已完成{{completed}}</span> / 全部{{todoList.length}}
        </span>
    <button class="btn btn-danger" v-show="completed" @click="deleteTodos">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "Todo-footer" ,
  props : {
    todoList : Array ,
    deleteTodos : Function ,
    selectAll : Function
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
  }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
