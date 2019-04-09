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
    <div class="page">
      <div class='section header'>
        <!-- 头部 -->
        <div class='title'>
          <span>{{$t('city.home.welcome.lineA')}}</span>
          <br />
          <br />
          <span>{{$t('city.home.welcome.lineB')}}</span>
        </div>
        <cheader></cheader>
      </div>
      <div class='section content'>
        content
      </div>
      <!-- 星图 -->
      <!-- <div class="section solar-system"></div> -->
      <!-- 政府新闻 -->
      <vNewsBoard news-title="city.news.board.title" class="news-board"></vNewsBoard>
      <div class='section city-news'>
        <cityNews></cityNews>
      </div>
      <div class='section feature-1'>
        feature-1
      </div>
      <!-- charts 财经走势 -->
      <div data-aos="zoom-in" class='section feature-stock-chart'>
        <marketChart></marketChart>
      </div>
      <!-- 自定义日历 -->
      <div data-aos="fade-left" class='section feature-calendar'>
        <calendar></calendar>
      </div>
      <!-- 注意事项 -->
      <div class="">

      </div>
      <div class='section footer'>
        <cfooter></cfooter>
      </div>
    </div>
    
  </div>
</template>
<script>
  import navigation from './components/navigation';
  import cheader from './components/cheader';
  import cfooter from './components/cfooter';
  import vNewsBoard from './components/views/newsBoard';
  import cityNews from './components/cityNews';
  import solarSystem from './components/solarSystem'
  import marketChart from './components/charts/marketChart';
  import calendar from './components/calendar/calendar';
  export default {
    data:function(){
      return{
      }
    },
    components: {
      navigation,
      cheader,
      cfooter,
      cityNews,
      vNewsBoard,
      solarSystem,
      marketChart,
      calendar
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
  .title{
    position: absolute;
    top: 20%;
    left: 0;
    right: 0;
    text-align: center;
    // font-family: 'lato',sans-serif;
    font-family: 'Orbitron',sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    text-shadow: 0 0 10px rgba(0, 108, 255, 0.8);
    font-size: 30px;
    letter-spacing: 5px;
    z-index: 10;
    span{
      // background: -webkit-linear-gradient(white, #38495a);
      // background-clip: text;
      // -webkit-background-clip: text;
      // -webkit-text-fill-color: transparent;
      color: white
    }
  }
  @import "./style/layout.less";
</style>

<style lang="sass" scoped>
  @import "./style/stars.sass"
</style>
