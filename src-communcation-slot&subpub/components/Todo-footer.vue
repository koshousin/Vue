<template>
  <div class="todo-footer">
    <label>
     <!-- <input type="checkbox" v-model="isSelectAll"/>-->
      <!-- 使用 slot 来进行占位填充 -->
      <slot name="checkAll"></slot>
    </label>
    <span>
          <!--<span>已完成{{completed}}</span> / 全部{{todoList.length}}-->
        <slot name="count"></slot>
        </span>
    <!--<button class="btn btn-danger" v-show="completed" @click="deleteTodos">清除已完成任务</button>-->
        <slot name="deleteBtn"></slot>
  </div>
</template>

<script>
export default {
  name: "Todo-footer" ,
  props : {
    todoList : Array
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
