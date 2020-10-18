<template>
  <ul>
    <li v-for="(category , index) in news" :key="index">{{category}}</li>
  </ul>
</template>

<script>
  export default {
    name: "News" ,
    data() {
      return {
        news : ['Economics' , 'Science' , 'Society']
      }
    }
  }
</script>

<style scoped>

</style>
