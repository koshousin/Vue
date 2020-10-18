<template>
  <div>
    <div id="msg">{{name}}</div>
  </div>
</template>

<script>
  export default {    // 配置对象
    data () {
      return {
        name : 'Hello World'
      }
    }
  }

</script>

<style>
  #msg {
    font-size : 40px;
    color : forestgreen;
  }
</style>
