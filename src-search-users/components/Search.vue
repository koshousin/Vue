<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="Type to search" v-model="keyword"/>
      <button @click="handleClick">Search</button>
    </div>
  </section>
</template>

<script>
import Pubsub from 'pubsub-js'

export default {
  name: "Search" ,
  data () {
    return {
      keyword : ''
    }
  } ,
  methods : {
    handleClick () {
      let keyword = this.keyword.trim();
      if(keyword){
        Pubsub.publish('searchUser' ,keyword )
      }
    }
  }
}
</script>

<style scoped>

</style>
