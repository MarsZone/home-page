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
      <main-page v-if="isShowMain"></main-page>
      <mainMap></mainMap>
      <!-- 地图页 -->
    </div>
    <!-- 尾页 -->
    <div class='section footer'>
      <cfooter></cfooter>
    </div>
  </div>
</template>
<script>
  import navigation from './components/navigation';
  import mainPage from './pages/mainPage'
  import mainMap from './pages/baseView/map'
  import cfooter from './components/cfooter';
  export default {
    name: 'Home',
    data:function(){
      return{
        isShowMain:false,
      }
    },
    components: {
      navigation,
      mainPage,
      mainMap,
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
    min-height: calc(100vh - 70px);
    flex-wrap: wrap;
  }
  .footer{
    width: 100%;
    margin-bottom: 0px;
  }
</style>

<style lang="sass" scoped>
  @import "./style/stars.sass"
</style>
