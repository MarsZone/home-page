<template>
  <div class="home">
    <div class="core-box">
      <!-- <core id='core'></core> -->
    </div>
    <h1>欢迎到访</h1>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
//  import core from '@/components/SquareCore.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
     core
  }
}
</script>
<style lang="less" scoped>
  h1{
    text-align: center;
    padding-top: 20px;
  }
  // .core-box{
  //   margin: auto;
  //   position: absolute;
  //   left: 0px;
  //   right: 0px;
  //   top: 40px;
  //   width: 40px;
  //   height: 40px;
  // }

</style>
