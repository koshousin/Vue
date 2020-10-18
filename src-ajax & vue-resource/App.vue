<template>
  <div>
    <h1 v-if="!repoUrl">Loading ...</h1>
    <h1 v-else>Most popular repo is <a :href="repoUrl">{{repoName}}</a> </h1>
  </div>
</template>

<script>

  import axios from 'axios'

  export default {
    data() {
      return {
        repoUrl : '' ,
        repoName : ''
      }
    } ,
    // 执行异步操作
    mounted (){
      // 使用 vueResource发送 请求
      const url =  `http://api.github.com/search/repositories?q=v&sort=stars`
      this.$http.get(url).then( response => {
         const resultArr = response.data.items[0]
        this.repoUrl = resultArr['html_url']
        this.repoName = resultArr['name']
      } , () => {
        alert('Nor Found')
      } )

      //使用axios 发送请求
      axios.get(url).then( response => {
        const resultArr = response.data.items[0]
        this.repoUrl = resultArr['html_url']
        this.repoName = resultArr['name']
      } ).catch ( error => {
        alert( error )
      } )
    }
  }
</script>

<style>

</style>
