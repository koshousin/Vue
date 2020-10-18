<template>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:;" @click="deleteC">删除</a>
    </div>
    <p class="user"><span >{{comment.name}}</span><span>说:</span></p>
    <p class="centence">{{ comment.content }}</p>
  </li>
</template>

<script>
export default {
  props : {
     // 指定属性名和属性值的类型
    comment : Object ,
    deleteComment : Function ,
    index : Number
  } ,
  methods : {
    deleteC () {
      if(confirm(`确定要删除${this.comment.name}的评论 吗 ？` )) {
        this.deleteComment(this.index)
      }
    }
  }
}
</script>

<style scoped>
  li {
    transition: .5s;
    overflow: hidden;
  }

  .handle {
    width: 40px;
    border: 1px solid #ccc;
    background: #fff;
    position: absolute;
    right: 10px;
    top: 1px;
    text-align: center;
  }

  .handle a {
    display: block;
    text-decoration: none;
  }

  .list-group-item .centence {
    padding: 0px 50px;
  }

  .user {
    font-size: 22px;
  }
</style>
