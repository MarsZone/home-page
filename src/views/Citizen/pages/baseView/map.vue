<template>
  <div class="map-box">
      <div class="information-box">

      </div>
      <div class="content" ref="main">
      </div>
  </div>
</template>

<script>
import init from './mapApp.js';
export default {
    data(){
        return{
        }
    },
    mounted(){
        var vue = this;
        init(vue);
    }
}
</script>

<style lang="less" scoped>
    .map-box{
        width: 100%;
        margin-top: 140px;
        z-index: 2;
        .content{
            display: flex;
            justify-content: center;
        }
    }
</style>