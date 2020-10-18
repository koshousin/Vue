<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对 Vue 的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add :addComment="addComment" />
      <List :deleteComment="deleteComment" :comments="comments" />
    </div>
  </div>
</template>

<script>
  // 引入组件
  import Add from './components/Add'
  import List from './components/List'

  export default {
   data () {
     return {
       comments : [ // 数据在那个组件，更新数据的行为就应该定义在哪个组件内
         {name : 'Kim' ,content : 'Wow , cool !'} ,
         {name : 'Saul' , content : 'Better call Saul ~~~' } ,
         {name : 'Mike' , content: 'Hi  buddy, did you see my gun ? '}
       ]
     }
   } ,
    // 映射组件标签
    components : {
      Add , List
    } ,
    methods : {
     // 添加评论
     addComment (comment) {
       this.comments.unshift(comment)
     } ,
      // 删除评论
      deleteComment (index) {
       this.comments.splice(index , 1 )
      }
    }
  }
  </script>

<style scoped>

</style>
