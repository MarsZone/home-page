<template>
  <div class="frame-view" >
    <!-- 导航栏 -->
    <navigation></navigation>
    <!-- 背景stars显示 -->
    <div class="star-small"></div>
    <div class="star-medium"></div>
    <div class="star-big"></div>
    <div class="page">
      <!-- 主页 -->
      <main-page></main-page>
      <!-- 地图页 -->
      sdfdsf
      <!-- 尾页 -->
      <div class='section footer'>
        <cfooter></cfooter>
      </div>
    </div>
  </div>
</template>
<script>
  import navigation from './components/navigation';
  import mainPage from './pages/mainPage'
  import cfooter from './components/cfooter';
  export default {
    name: 'Home',
    data:function(){
      return{
      }
    },
    components: {
      navigation,
      mainPage,
      cfooter,
    },
    mounted(){
    const moment = require('moment');
    console.log(moment().format());
    },
    methods: {

    }
  }

  ;
</script>

<style lang="less" scoped>
  .frame-view{
    // height: 100rem;
    background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
    overflow: hidden;
  }
  .page{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .footer{
      width: 100%;
    }
  }
</style>

<style lang="sass" scoped>
  @import "./style/stars.sass"
</style>
