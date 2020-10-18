<template>
  <ul>
    <li>id :{{messageDetail.id}}</li>
    <li>title :{{messageDetail.title}}</li>
    <li>content :{{messageDetail.content}} </li>
  </ul>
</template>

<script>
  const messages = []
  export default {
    name: "MessageDetail" ,
    data() {
      return {
        messageDetail : {}
      }
    } ,
    mounted () {
      setTimeout( () => {
        const messages = [
          {id: 1 , title :'TOP VS FNC' ,content : 'Nice job'} ,
          {id: 2 , title :'JDG VS DWG' ,content : 'OH , that hurts ~'} ,
          {id: 3 , title :'SN VS LGD' ,content : 'Emm ... good luck '}
        ]
        this.messages = messages
        let id = this.$route.params.id*1;   // 转化为数值类型
        this.messageDetail = messages.find(element => element.id === id)
      } , 1000 )
    } ,
    watch : {
      $route : function (newValue) {   // 一旦路由变化则会调用
        let id = newValue.params.id*1;   // 转化为数值类型
        this.messageDetail = this.messages.find(element => element.id === id)
      }
    }
  }
</script>

<style scoped>

</style>
