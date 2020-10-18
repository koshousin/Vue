<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="handleEnter" v-model="todoInfo" />
  </div>
</template>

<script>
    export default {
      name: "Todo-header"  ,
      data () {
        return {
          todoInfo : ''
        }
      } ,
      props : {
        addTodo : Function
      } ,
      methods : {
        handleEnter () {
          const title = this.todoInfo ;
          if(!title) {
            alert ('Please type something to add !!!')
            return ;
          }
          const todo = {title, complete : false}
          //触发自定义事件 : addTodo
          this.$emit('addTodo' , todo)

          this.todoInfo = ''
        }
      }
    }
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}

</style>
