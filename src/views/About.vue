<template>
  <div>
    About
    <input type="text"  >
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: "About" ,
  props : {
    msg : String
  }
}
</script>

<style scoped>

</style>
