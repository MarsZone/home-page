<template>
  <div class="main-page">
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
      <!-- 展示一些常用信息 -->
      <div class="feature-box">
        <!-- 航班信息 空港 -->
        <div class='feature feature-table'>
          feature-1
        </div>
        <!-- charts 财经走势 -->
        <div data-aos="zoom-in" class='feature feature-stock-chart'>
          feature-2
          <marketChart></marketChart>
        </div>
        <!-- 自定义日历 -->
        <div data-aos="fade-left" class='feature feature-calendar'>
          <calendar></calendar>
        </div>
      </div>
      <!-- 政府新闻 -->
      <vNewsBoard news-title="city.news.board.title" class="news-board"></vNewsBoard>
      <div class='section city-news'>
        <cityNews></cityNews>
      </div>
      <!-- 一些内容 -->
      <div class='section content'>
        content
      </div>
      <!-- 注意事项 -->
      <div class="">

      </div>
  </div>
</template>

<script>
import cheader from '../components/cheader';
import vNewsBoard from '../components/views/newsBoard';
import cityNews from '../components/cityNews';
import marketChart from '../components/charts/marketChart';
import calendar from '../components/calendar/calendar';
export default {
    components: {
      cheader,
      cityNews,
      vNewsBoard,
      marketChart,
      calendar
    },
}
</script>

<style lang="less" scoped>
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
  .main-page{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  @import "../style/layout.less";
</style>