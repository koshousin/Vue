<template>
  <div>
    <h1 v-if="initView">Type name to search</h1>
    <h1 v-if="loadView">Loading</h1>
    <h1 v-if="errorView">Oops , nothing found ~ </h1>
    <div class="row">
      <div v-for="(user , index) in users"  class="card" :key="index">
        <a :href="user['html_url']" target="_blank">
          <img :src="user['avatar_url']" style='width: 100px'/>
        </a>
        <p class="card-text">{{ user['login']}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Pubsub from 'pubsub-js'
  import axios from 'axios'

  export default {
    name: "Main" ,
    data() {
      return {
        initView : true ,
        loadView : false ,
        users : null ,  // [{url : xxx , avatarUrl : xxx , name : xxx} ]
        errorView : false
      }
    } ,
    methods : {
      searchUser () {

      }
    } ,
    // 在初始化完成之后订阅
    mounted() {
      Pubsub.subscribe('searchUser' , (msg , keyword) => {
        let url = `https://api.github.com/search/users?q=${keyword}`
        // 更新状态
        this.initView = false;
        this.loadView = true
        // 清除上次users 信息
        this.users = null
        //发送请求
        axios.get(url).then( response => {
          // 更新成功状态
          this.loadView = false
          this.users = response.data.items;
        } ) .catch ( () => {
          // 发送失败的话，则会更新失败状态
          this.loadView = false
          this.errorView = true
          console.log('Ops not found')
        })
      } )
    }
  }
</script>

<style scoped>

</style>
