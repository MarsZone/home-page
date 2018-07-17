<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">主页</router-link> |
      <a href="http://marszm.cn/blog/wordpress/">博客</a> |
      <router-link to="/about">关于</router-link>
    </div> -->
    <div class="menu_box">
      <circle-menu></circle-menu>
    </div>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import circleMenu from '@/components/Menu.vue'

export default {
  components: {
    circleMenu
  }
}
</script>


<style lang="less">
// .fade-enter-active, .fade-leave-active {
//   transition: opacity .5s;
// }
// .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
//   opacity: 0;
// }

.menu_box{
  width: 100%;
  height: 100%;
  position: absolute;
  background: #2c3e50;
  z-index: -1;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:white;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    font-size: 1.2em;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
