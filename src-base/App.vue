<template>
  <div id="app">
    <img src="../src/assets/logo.png" alt="">
    <!-- 使用组件标签  -->
    <HelloWorld />
  </div>
</template>

<script>
  /* 1. 引入组件 */
  import HelloWorld from './HelloWorld'
  export default {
    components : {
      // 2，映射组件标签
      HelloWorld
    }
  }

</script>

<style>
  img {
    width: 200px;
  }
</style>
