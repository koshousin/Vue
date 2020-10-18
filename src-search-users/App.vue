<template>
  <div class="container">
    <Search />
    <users-main />
  </div>
</template>

<script>

  import Search from './components/Search'
  import Main from './components/Main'

  export default {
    components : {
      Search ,
      usersMain : Main
    }
  }
</script>

<style>

</style>
