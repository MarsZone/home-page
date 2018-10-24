<template>
  <div class="home-page" >
    <!-- 导航栏 -->
    <navigation></navigation>
    <!-- 主体 -->
    <!-- <h1></h1> -->
    <!-- stars -->
    <div class="star-small"></div>
    <div class="star-medium"></div>
    <div class="star-big"></div>
    <!-- 文字测试 -->
    <!-- <div class='title'>
      <span>Welcome to UFPC</span>
      <br>
      <span>United Federation of Planets Citizenship</span>
    </div> -->
    <div class="page">
      <div class='section header'>
        Header
      </div>
      <div class='section content'>
        content
      </div>
      <div class='section sign-up'>
        sign-up
      </div>
      <div class='section feature-1'>
        feature-1
      </div>
      <div class='section feature-2'>
        feature-2
      </div>
      <div class='section feature-3'>
        feature-3
      </div>
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
  .home-page{
    // height: 100rem;
    background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
    overflow: hidden;
  }
  h1 {
    text-align: center;
    padding-top: 20px;
  }
  @import "./style/layout.less";
</style>

<style lang="sass" scoped>
  @import "./style/stars.sass"
</style>
