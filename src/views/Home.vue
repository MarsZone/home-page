<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {

  },
  mounted(){
    const moment = require('moment');
    console.log(moment().format());
  }
}
</script>
