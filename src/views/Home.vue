<template>
  <div class="home">
    <div class="spin">
      <sokect id='socket'></sokect>
    </div>
    
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import sokect from '@/components/spinner/Socket.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
    sokect
  }
}
</script>
<style lang="less" scoped>
  .spin{
    margin: 0 auto;
  }
  #socket{
    transform:scale(2);
  }

</style>
