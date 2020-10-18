<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Router Test</h2></div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <router-link to="/about" class="list-group-item ">About</router-link>
          <router-link to="/home" class="list-group-item ">Home</router-link>
          <!--<a href="#/about" class="list-group-item router-link-exact-active router-link-active">About</a>
          <a href="#/home" class="list-group-item">Home</a>-->
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 缓存路由组件  -->
            <keep-alive>
              <router-view msg="test.msg"></router-view>
            </keep-alive>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*import About from './views/About'
import Home from './views/Home'*/

export default {
  name: "App"
}
</script>

<style scoped>

</style>
