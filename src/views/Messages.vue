<template>
  <div>
    <ul>
      <li v-for="msg in messages" :key="msg.id" >
        <router-link :to="`/home/messages/detail/${msg.id}`">{{msg.title}}</router-link>
        <button @click="handlePush(msg.id)">Push</button>
        <button @click="handleReplace(msg.id)">Replace</button>
      </li>
    </ul>
    <button @click="$router.back()">Back</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Messages" ,
    data() {
      return {
        messages : []
      }
    } ,
    // 模仿异步请求
    mounted () {
      setTimeout(() => {
        this.messages = [
          {id: 1 , title :'TOP VS FNC'} ,
          {id: 2 , title :'JDG VS DWG'} ,
          {id: 3 , title :'SN VS LGD' }
        ]
      } , 1500)
    } ,
    methods : {
      handlePush (id) {
        this.$router.push(`/home/messages/detail/${id}`)
      }  ,
      handleReplace (id) {
        this.$router.replace(`/home/messages/detail/${id}`)
      }
    }
  }
</script>

<style scoped>

</style>
