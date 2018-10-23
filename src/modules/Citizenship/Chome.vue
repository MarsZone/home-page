<template>
  <div class="home-page" >
    <!-- 导航栏 -->
    <navigation></navigation>
    <!-- 主体 -->
    <h1></h1>
    <!-- stars -->
    <div class="star-small"></div>
    <div class="star-medium"></div>
    <div class="star-big"></div>
    <!-- 文字测试 -->
    <div class='title'>
      <span>Welcome to UFPC</span>
      <br>
      <span>United Federation of Planets Citizenship</span>
    </div>
  </div>
</template>
<script>
  import navigation from './components/navigation';
  export default {
    data:function(){
      return{
      }
    },
    components: {
      navigation,
    },
    methods: {
    }
  }

  ;
</script>

<style lang="less" scoped>
  h1 {
    text-align: center;
    padding-top: 20px;
  }
</style>

<style lang="sass" scoped>
  @import "./style/stars.sass"
</style>
