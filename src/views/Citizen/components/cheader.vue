<template>
    <!-- swiper -->
    <swiper id="pa" :options="swiperOption">
      <swiper-slide class="slide-1"></swiper-slide>
      <swiper-slide class="slide-2"></swiper-slide>
      <swiper-slide class="slide-3"></swiper-slide>
      <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
    </swiper>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        // effect: "fade",
        autoplay: {
          delay: 10000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet(index, className) {
            return `<span class="${className} swiper-pagination-bullet-custom"></span>`;
          }
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log('this is current swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 2000, false)
  }
};
</script>
<style lang="less">
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  // #pa /deep/ .swiper-pagination-bullets{
  //   bottom: 15%;
  //   left: -25%;
  // }
  #pa /deep/ .swiper-pagination-bullet {
    display: inline-block;
    vertical-align: middle;
    height: 7px;
    width: 35px;
    background: #0c67a1;
    transition: background-color 0.3s linear;
    transform: skew(-35deg, 0);
    margin-right: 3px;
    text-indent: -999px;
    border-radius: 0;
    opacity: 0.8;
    overflow: hidden;
  }
  #pa /deep/ .swiper-pagination-bullet-custom.swiper-pagination-bullet-active {
    background: #42edf8;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
  }
  .slide-1 {
    opacity: 0.8;
    background-image: url("../image/street.jpg");
  }
  .slide-2 {
    opacity: 0.8;
    background-image: url("../image/nori.jpg");
  }
  .slide-3 {
    opacity: 0.8;
    background-image: url("../image/city.jpg");
  }
</style>