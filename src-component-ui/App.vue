<template>
  <mt-button :type="btnStyle" @click.native="handleClick">
    Vue
  </mt-button>
</template>

<script>
  import {Toast} from 'mint-ui'
  export default {
    data () {
      return {
        btnStyle : 'primary'
      }
    } ,
    methods : {
      handleClick () {
        this.btnStyle = 'danger'
        Toast({
          message :'Hi ! dont touch me' ,
          duration : 1000
        })
        setTimeout( () => {
          this.btnStyle = 'primary'
          Toast('OK ~ now you can touch me ')
        } , 2000)
      }
    }
  }
</script>

<style>
  button {
    width : 100%
  }
</style>
